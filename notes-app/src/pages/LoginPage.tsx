import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonLabel, IonItem } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/home';
            }
        }).catch(error => {
            console.error('Error during login:', error);
            alert('Login failed. Please check your credentials.');
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Email:</IonLabel>
                    <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} type="email" />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password:</IonLabel>
                    <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password" />
                </IonItem>
                <IonButton onClick={handleLogin}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default LoginPage;
