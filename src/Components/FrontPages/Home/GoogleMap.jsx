import React from 'react';
import { Map, Marker } from "pigeon-maps"

const GoogleMap = () => {
    return (
        <div>
            <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={8}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    );
};

export default GoogleMap;