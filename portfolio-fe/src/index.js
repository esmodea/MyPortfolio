import React from 'react';
import antd, {Layout} from 'antd';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './features/state/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
      </Provider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
