import { IonButton, IonContent, IonInput, IonLabel, IonPage, IonLoading } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://reqres.in/api/register', { email, password });
            localStorage.setItem('token', response.data.token);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao registrar:", error);
            setLoading(false);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonLabel>Email:</IonLabel>
                <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} type="email" />

                <IonLabel>Password:</IonLabel>
                <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password" />

                <IonButton expand="full" onClick={handleRegister}>Register</IonButton>

                <IonLoading isOpen={loading} message={'Registrando...'} />
            </IonContent>
        </IonPage>
    );
};

export default RegisterPage;
