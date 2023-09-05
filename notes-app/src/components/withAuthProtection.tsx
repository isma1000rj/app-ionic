import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthProtection = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P) => {
        const token = localStorage.getItem('token');

        if (!token) {
            return <Redirect to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
}

export default withAuthProtection;
