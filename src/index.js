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
import { TabHomeSelectedContextProvider } from './context/tabHomeSelectedContext';
import { OptionsMenuEmpresaContextProvider } from './context/OptionsMenuEmpresaContext';
import { BarberHomeContextProvider } from './context/BarberHomeContext';
import { AgendamentoContextProvider } from './context/AgendamentoContext';
import { FreeDaysContextProvider } from './context/FreeDaysContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <MenuUserContextProvider>
        <SearchContextProvider>
          <ResultSearchContextProvider>
            <EditPasswordContextProvider>
              <TabHomeSelectedContextProvider>
                <OptionsMenuEmpresaContextProvider>
                  <BarberHomeContextProvider>
                    <AgendamentoContextProvider>
                      <FreeDaysContextProvider>
                        <App />
                      </FreeDaysContextProvider>
                    </AgendamentoContextProvider>
                  </BarberHomeContextProvider>
                </OptionsMenuEmpresaContextProvider>
              </TabHomeSelectedContextProvider>
            </EditPasswordContextProvider>
          </ResultSearchContextProvider>
        </SearchContextProvider>
      </MenuUserContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);