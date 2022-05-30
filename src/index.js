import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

import { UserContextProvider } from "./context/UserContext"
import { SearchContextProvider } from "./context/SearchContext"
import { MenuUserContextProvider } from './context/MenuUserContext';
import { ResultSearchContextProvider } from './context/ResultSearchContext'
import { EditPasswordContextProvider } from './context/EditPasswordContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <MenuUserContextProvider>
        <SearchContextProvider>
          <ResultSearchContextProvider>
            <EditPasswordContextProvider>
              <App />
            </EditPasswordContextProvider>
          </ResultSearchContextProvider>
        </SearchContextProvider>
      </MenuUserContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);