
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Breakfast/Breakfast';
import Cart from './Components/Cart/Cart';
import Dinner from './Components/Dinner/Dinner';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Lunch from './Components/Lunch/Lunch';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';

function App() {
  
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>

                <Route path='breakfast' element={<Breakfast />} />
                <Route path='lunch' element={<Lunch />} />
                <Route path='dinner' element={<Dinner />} />
        </Route>
            
    
        
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
