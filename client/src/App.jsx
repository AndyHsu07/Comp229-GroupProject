import {BrowserRouter, Routes ,Route} from 'react-router-dom';


//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Singup'
import Product from './pages/Product'
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
     
      <BrowserRouter>
       <Navbar/>
        <div className="Pages">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/products" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
