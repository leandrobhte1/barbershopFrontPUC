import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

import { UserContextProvider } from "./context/UserContext"
import { SearchContextProvider } from "./context/SearchContext"
import { MenuUserContextProvider } from './context/MenuUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <MenuUserContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </MenuUserContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);