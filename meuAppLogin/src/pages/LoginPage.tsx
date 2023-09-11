import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const LoginPage: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = () => {
        if (username === 'admin' && password === '12345') {
            console.log('Login bem-sucedido!');
            localStorage.setItem('authToken', 'simulatedJWTtoken');
            history.push('/main'); // Redireciona para a MainPage
            // Implemente a lógica de redirecionamento aqui
        } else {
            console.log('Falha no login!');
            setShowAlert(true);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Usuário</IonLabel>
                    <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Senha</IonLabel>
                    <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
                </IonItem>
                <IonButton expand="full" onClick={handleLogin}>Login</IonButton>

                <IonAlert
                     isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Falha no Login'}
                    message={'Usuário ou senha incorretos.'}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
