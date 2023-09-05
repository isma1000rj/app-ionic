import { IonContent, IonButton, IonImg } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import React, { useState } from 'react';

const CameraComponent: React.FC = () => {
    const [photo, setPhoto] = useState<string>('');

    async function takePicture() {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });
        setPhoto(image.webPath || image.path!);
    }
    return (
        <IonContent>
            <IonButton expand="full" onClick={takePicture}>
                Capture Image
            </IonButton>
            <IonImg src={photo} />
        </IonContent>
    );
}

export default CameraComponent;
