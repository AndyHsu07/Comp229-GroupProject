import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import PrivateRoute from '../lib/PrivateRoute';

//pages
import Home from './pages/Home'
import Login from '../user/Login'
import Signup from '../user/Singup'
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Signout from '../user/Signout';
import AllUsers from './pages/getAllUsers';
import Profile from './pages/profile';
import {useSelector, Provider} from 'react-redux';


function App() {


  return (
   

    <div className="App">
     
      <BrowserRouter>
       <Navbar/>
        <div className="Pages">
          <Routes>
              {/* Private */}
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/api/users" element={<PrivateRoute><AllUsers /></PrivateRoute>} />
              <Route path="/products" element={<PrivateRoute><Product /></PrivateRoute>} />
              
              <Route path="/api/users/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />

              <Route path="/login" element={<Login />}/>
              <Route path="/singout" element={<Signout />}/>
              {/* <Route path="/users" elements={<Users />} /> */}
              
              <Route path="/signup" element={<Signup />}/>
              
          </Routes>
        </div>
      </BrowserRouter>

    </div>
    
  )
}

export default App
