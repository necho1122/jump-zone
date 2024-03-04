import { useAuth0 } from '@auth0/auth0-react';
import Samplicio from './hosts/Samplicio';

function SamplicioContainer() {
    const { isAuthenticated, isLoading, error, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>; 
    } else if (error) {
        return <div>Oops... {error.message}</div>; 
    }

    if (!isAuthenticated) {
        loginWithRedirect();
        return <div>Redirecting...</div>;
    }

    return <Samplicio />;
}

export default SamplicioContainer;