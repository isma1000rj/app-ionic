import { IonPage, IonContent, IonInput, IonButton, IonLabel, IonItem, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';

const AddUserPage: React.FC = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const addUser = () => {
        const newUser = {
            name: name,
            job: job
        };

        axios.post('https://reqres.in/api/users', newUser)
            .then(response => {
                console.log("Usuário criado:", response.data);
                setAlertMessage(`Usuário criado: ${JSON.stringify(response.data)}`);
                setShowAlert(true);
            })
            .catch(error => {
                console.error("Erro ao adicionar usuário:", error);
                setAlertMessage('Erro ao adicionar usuário.');
                setShowAlert(true);
            });
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Nome</IonLabel>
                    <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Trabalho</IonLabel>
                    <IonInput value={job} onIonChange={e => setJob(e.detail.value!)} />
                </IonItem>
                <IonButton expand="full" onClick={addUser}>Adicionar</IonButton>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={alertMessage.startsWith('Erro') ? 'Erro' : 'Sucesso'}
                    message={alertMessage}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default AddUserPage;
