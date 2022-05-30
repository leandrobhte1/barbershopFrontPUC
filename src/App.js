import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from 'react-router-dom';

import './app.css'

const App = () => {

    return(
        <div className="App">
            <Router>
                <Header />
                <Content/>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                <ToastContainer />
            </Router>
        </div>
    )
}
    

export default App