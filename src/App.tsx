import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Loader from './app/components/Loader';
import ErrorBoundary from './app/components/Error';
import Routing from './app/routes';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
