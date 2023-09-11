import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import AddUserPage from './pages/AddUserPage';
import CameraComponent from "./pages/cameraPhoto";
import GeolocationComponent from "./pages/LocationPage";
import PrivateRoute from './components/PrivateRoute';

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

    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/main" component={MainPage} exact />
            <Route path="/camera" component={CameraComponent} exact />
            <Route path="/location" component={GeolocationComponent} exact />
            <Route path="/add-user" component={AddUserPage} exact />
            <Redirect from="/" to="/login" exact />
        </IonRouterOutlet>
    </IonReactRouter>


);

export default App;
