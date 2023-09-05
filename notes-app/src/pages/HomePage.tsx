import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useHistory } from 'react-router-dom';
import withAuthProtection from '../components/withAuthProtection';

const HomePage: React.FC = () => {
    const history = useHistory();

    const handleAddNote = () => {
        history.push("/addNotePage");
    };
    const handleListNote = () => {
        history.push("/ListNote");
    };

    const handleLogout = () => {
        // Remove o token do armazenamento local
        localStorage.removeItem('token');

        // Redireciona para a página de login ou outra página inicial
        window.location.href = '/login'; // ou use history.push('/login') se estiver usando react-router
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Adicionar Notas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="ion-text-center">
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="auto">
                            <IonButton onClick={handleAddNote}>Adicionar Nota</IonButton>
                            <IonButton onClick={handleListNote}>ListarNotas</IonButton>
                            <IonButton onClick={handleLogout}>Logout</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default withAuthProtection(HomePage);
