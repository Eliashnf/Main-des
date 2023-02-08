import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { NavBar } from './components/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Features from './pages/Features';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Features" element={<Features/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
