import React, { Suspense } from 'react';
// import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
// import { Store } from 'redux';
import { Router } from 'react-router-dom';
// import configureStore from './store';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import FullPageLoader from './components/Loader/FullPageLoader';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './config/ApolloClient';
const AppRoutesComponent = React.lazy(() => import('./routes'));

const history = createBrowserHistory();
// const store: Store = configureStore(history);

const objectToValuesPolyfill = (object: any) => {
  return Object.keys(object).map(key => object[key]);
};
Object.values = Object.values || objectToValuesPolyfill;

const App: React.FC = () => {
  localStorage.setItem('language', 'en');
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Provider store={store}> */}
        <Router history={history}>
          <Suspense fallback={<FullPageLoader />}>
            <AppRoutesComponent />
          </Suspense>
        </Router>
        <ToastContainer
          autoClose={8000}
          hideProgressBar
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
        {/* </Provider> */}
      </ApolloProvider>
    </>
  );
};

export default App;
