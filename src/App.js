import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Login from './Login';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='Product-page' element={<Product/>}></Route>
            <Route path='Login-page' element={<Login/>}></Route>
            <Route path='Sign-In' element={<Signin/>}></Route>
            <Route path='Greet' element={<Product/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
