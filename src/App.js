import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import Product from "./Pages/Products/Product";
import Contact from "./Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer";
import Abouts from "./Pages/Abouts/Abouts";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Producto" element={<Product/>}/>
          <Route path="Contactanos" element={<Contact/>}/>
          <Route path="Abouts" element={<Abouts/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
