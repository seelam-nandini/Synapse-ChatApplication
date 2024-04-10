import { lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider.jsx';
import AccountProvider from './context/AccountProvider.jsx';
import Loader from './components/loader/Loader.jsx';

const Messenger = lazy(() => import('./components/Messenger.jsx'));

function App() {

  const clientId='924698334462-1thj4fj3e5nr4ku02oqbcftugnrde9pv.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
