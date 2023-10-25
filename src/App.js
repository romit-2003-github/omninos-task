import './App.css';

import Loginpage from './components/Loginpage';
import Navbar from './components/Navbar';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
