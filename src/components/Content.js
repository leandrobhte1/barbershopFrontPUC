import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import LoginCadastro from './LoginCadastro'
import Search from './Search'
import Reports from './Reports'
import History from './History'
import Avaliacao from './Avaliacao'

const Content = () => {
  return (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login-cadastro" element={<LoginCadastro />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/avaliacao" element={<Avaliacao />}></Route>
            {/* <Route path="/param/:id" element={<Param />}></Route>
            <Route path="/about" element={<About />}></Route> */}
            <Route path="*" element={<Home />}></Route>
        </Routes>
    </main>
  )
}

export default Content