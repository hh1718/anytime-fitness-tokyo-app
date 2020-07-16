import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCIDLJ4L6rm3WTArvgammxDVxv7vj_SjEY",
  authDomain: "my-anytime-fitness-ranking.firebaseapp.com",
  databaseURL: "https://my-anytime-fitness-ranking.firebaseio.com",
  projectId: "my-anytime-fitness-ranking",
  storageBucket: "my-anytime-fitness-ranking.appspot.com",
  messagingSenderId: "898012485964",
  appId: "1:898012485964:web:ead0ea2c14b7be6a4397e9",
  measurementId: "G-SJ5K4EYHHH"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
