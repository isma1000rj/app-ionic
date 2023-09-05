import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import AddNotePage from "./pages/AddNotePage";
import ListNote from "./pages/ListNote";
import RegisterPage from './pages/RegisterPage';
import { home as homeIcon, add as addIcon, list as listIcon } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>

                <IonRouterOutlet>
                    {/*essa rota está protegida pelo hoc withAuthProtection*/}
                    <Route path="/home" component={HomePage} exact={true} />
                    <Route path="/login" component={LoginPage} exact={true} />
                    {/*Essas duas estão protegidas pelo componente PrivateRoute*/}
                    <PrivateRoute path="/addNotePage" component={AddNotePage} exact={true} />
                    <PrivateRoute path="/ListNote" component={ListNote} exact={true} />
                    {/* Outras rotas, se existirem */}
                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon icon={homeIcon} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="addNotePage" href="/addNotePage">
                        <IonIcon icon={addIcon} />
                        <IonLabel>Adicionar</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="ListNote" href="/ListNote">
                        <IonIcon icon={listIcon} />
                        <IonLabel>Notas</IonLabel>
                    </IonTabButton>
                </IonTabBar>


            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
