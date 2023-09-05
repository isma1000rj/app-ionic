import { IonContent, IonButton, IonLabel } from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import React, { useState } from 'react';

const GeolocationComponent: React.FC = () => {
    const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

    async function fetchLocation() {
        const position = await Geolocation.getCurrentPosition();
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    }
    return (
        <IonContent>
            <IonButton expand="full" onClick={fetchLocation}>
                Get Current Location
            </IonButton>
            {location && (
                <div>
                    <IonLabel>Latitude: {location.lat}</IonLabel>
                    <IonLabel>Longitude: {location.lng}</IonLabel>
                </div>
            )}
        </IonContent>
    );
}

export default GeolocationComponent;
