import { IonPage, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useIonRouter } from '@ionic/react';
import { useHistory } from 'react-router-dom';



const MainPage: React.FC = () => {

    const router = useIonRouter();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push('/login');
    };

    const handleAddUser = () => {
        router.push('/add-user');
    };

    const handleCamera = () => {
        router.push('/camera');
    };

    const handleLocation = () => {
        router.push('/location');
    };



    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(error => {
                console.error("Erro ao buscar usuários:", error);
            });
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonList>
                    {users.map((user: any) => (
                        <IonItem key={user.id}>
                            <IonLabel>{user.first_name} {user.last_name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
                <IonButton expand="full" onClick={handleAddUser}>Adicionar Novo Usuário</IonButton>
                <IonButton expand="full" onClick={handleCamera}>Tirar Foto</IonButton>
                <IonButton expand="full" onClick={handleLocation}>Tirar Localizacao</IonButton>

                <IonButton expand="full" onClick={handleLogout}>Logout</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default MainPage;
