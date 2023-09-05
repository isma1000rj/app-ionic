import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {

    const token = localStorage.getItem('token');

    if (!token) {
        return <Redirect to="/login" />;
    }

    return <Route path={props.path} component={props.component} exact={props.exact} />;
}

export default PrivateRoute;
