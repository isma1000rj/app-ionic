import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTextarea, IonLabel } from '@ionic/react';
import { IonToast} from '@ionic/react';
import { useHistory } from 'react-router-dom';

import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';

const AddNotePage: React.FC = () => {

    const [image, setImage] = useState<string | undefined>();
    const [location, setLocation] = useState<Position | undefined>();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const history = useHistory();

    const takePhoto = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
        setImage(image.webPath);
    };

    const getCurrentLocation = async () => {
        const position = await Geolocation.getCurrentPosition();
        setLocation(position);
    };

    const [note, setNote] = useState<string>('');

    const handleSave = () => {
        const newNote = {
            title: location ? `${location.coords.latitude}, ${location.coords.longitude}` : 'Sem Localização',
            content: note,
            image: image
        };
        let storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            const notesArray = JSON.parse(storedNotes);
            notesArray.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notesArray));
        } else {
            localStorage.setItem('notes', JSON.stringify([newNote]));
        }
        setToastMessage("Nota salva com sucesso!");
        setShowToast(true);
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Adicionar Nota</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>Escreva sua nota:</IonLabel>
                <IonTextarea value={note} onIonChange={e => setNote(e.detail.value!)}></IonTextarea>


                {image && <img src={image} alt="Nota" />}
                {location && <p>Localização: {location.coords.latitude}, {location.coords.longitude}</p>}

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                />



                <IonButton expand="block" onClick={takePhoto}>Tirar Foto</IonButton>
                <IonButton expand="block" onClick={getCurrentLocation}>Pegar Localização</IonButton>

                <IonButton expand="block" onClick={handleSave}>Salvar Nota</IonButton>
                <IonButton expand="block" onClick={() => history.push('/home')}>Voltar para Home</IonButton>


            </IonContent>
        </IonPage>
    );
};

export default AddNotePage;
