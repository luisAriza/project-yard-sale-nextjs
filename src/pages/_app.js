import '@styles/globals.css';
import Header from '@containers/Header';
import AppContext from '@context/appContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
