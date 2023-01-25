import logo from './logo.svg';

import './App.css';
import { Navbar } from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about/:id" element={<About/>}></Route>

      <Route path="/product" element={<Product/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
