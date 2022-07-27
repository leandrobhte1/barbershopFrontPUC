import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import LoginCadastro from './LoginCadastro'
import Search from './Search'
import Reports from './Reports'
import History from './History'
import Avaliacao from './Avaliacao'
import Agendamento from './Agendamento'
import Account from './Account'
import Empresa from './Empresa'
import BarberHome from './BarberHome'
import EscolhaProfissional from './EscolhaProfissional'

const Content = () => {
  return (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login-cadastro" element={<LoginCadastro />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
            <Route path="/historico" element={<History />}></Route>
            <Route path="/avaliacao" element={<Avaliacao />}></Route>
            <Route path="/agendamento" element={<Agendamento />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/empresa" element={<Empresa />}></Route>
            <Route path="/agendamento/profissional" element={<EscolhaProfissional />}></Route>
            <Route path="/barberHome/:id" element={<BarberHome />}></Route>
            {/* <Route path="/param/:id" element={<Param />}></Route>
            <Route path="/about" element={<About />}></Route> */}
            <Route path="*" element={<Home />}></Route>
        </Routes>
    </main>
  )
}

export default Content