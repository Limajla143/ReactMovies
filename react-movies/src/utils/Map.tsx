import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { coordinateDTO } from "./coordinates.model.d";
import { useState } from "react";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer
            center={[14.585400268095125, 121.05724434336737]} zoom={14} style={{height: props.height}}
        >
            <TileLayer attribution="React Movies" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            {props.readOnly ? null : <MapClick setCoordinates={cooordinates => {
                setCoordinates([cooordinates]); 
                props.handleMapClick(cooordinates);
            }} />}

            {coordinates.map((coordinate, index) => <Marker key={index}
                position={[coordinate.lat, coordinate.lng]}> 
                {coordinate.name? <Popup>
                    {coordinate.name}
                </Popup> : null}
                </Marker>    
            )};
        </MapContainer>
    )
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
    readOnly: boolean
}

Map.defaultProps = {
    height: '500px',
    handleMapClick: () => {},
    readOnly: false
}

function MapClick(props: mapClickProps) {
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng});   
    })
    return null;
}

interface mapClickProps {
    setCoordinates(coordinates: coordinateDTO): void;
}