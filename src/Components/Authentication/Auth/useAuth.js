import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useState, createContext } from "react";
import firebaseConfig from './firebase.Config';

firebase.initializeApp(firebaseConfig);
//Auth Context Provider
const AuthContext = createContext();
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);


const getUser = (user) => {
    const { displayName, email, photoURL } = user;
    return { name: displayName, email: email, photo: photoURL };
}

const Auth = () => {
    const [user, setUser] = useState(null);
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(res => {
                const signedInUser = getUser(res.user);
                setUser(signedInUser);
                return res.user;
            })
            .catch(err => {
                // console.log(err.message);
                setUser(null);
                return err.message;

            })
    }
    const signOut = () => {
        return firebase.auth().signOut()
            .then(res => {
                setUser(null);
                return true;
            })
            .catch(err => {
                // console.log(err.message);
                return false;
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser);

            } else {
                setUser(undefined)
            }
        });
    }, [])
    return {
        user,
        signInWithGoogle,
        signOut,
    }
}
export default Auth;