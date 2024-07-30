import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import PrivateRoute from '../lib/PrivateRoute';

//pages
import Home from './pages/Home'
import Login from './user/Login'
import Signup from './user/Singup'
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Signout from './user/Signout';
import AllUsers from './pages/getAllUsers';
import Profile from './pages/profile';
import EditProduct from './product/EditProduct';

function App() {


  return (
   

    <div >
     
      <BrowserRouter>
      
        <div className="Pages">
        
        <div>
          <Routes>
              {/* Private */}
              <Route path="/" element={<PrivateRoute><Navbar /><Home /></PrivateRoute>} />
              <Route path="/api/users/:id" element={<PrivateRoute><Navbar /><Profile /></PrivateRoute>} />
              <Route path="/api/users" element={<PrivateRoute><Navbar /><AllUsers /></PrivateRoute>} />
              <Route path="/api/product/:id" element={<PrivateRoute><Navbar /><EditProduct /></PrivateRoute>} />
              <Route path="/products" element={<PrivateRoute><Navbar /><Product /></PrivateRoute>} />
              
              

              <Route path="/login" element={<><Navbar /><Login /></>}/>
              <Route path="/singout" element={<><Navbar /><Signout /></>}/>
              {/* <Route path="/users" elements={<Users />} /> */}
              
              <Route path="/signup" element={<><Navbar /><Signup /></>}/>
              
          </Routes>
          </div>
        </div>
      </BrowserRouter>

     </div>


  )
}

export default App


