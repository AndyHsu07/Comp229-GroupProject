import {Link} from 'react-router-dom';
import Signout from '../../user/Signout';
import { useSelector,useDispatch } from 'react-redux';
import auth from '../../auth/auth-helper';
import { jwtDecode } from 'jwt-decode'


const Navbar= ()=>{
    
    
    
    return(
        <header >
                <Link to="/"> <img src="../../public/logo.png" alt="" height="100px"/> </Link>
            
            <div className="container">
                {auth.isAuthenticated() &&(<span>
                <Link to={"/api/users/" + auth.isAuthenticated().user._id}><h1>Profile</h1></Link>
                </span>
                )
                }
                {/* <Link to="/api/users/:id"><h1>My Profile</h1></Link> */}
                <Link to="/api/users"><h1>User List</h1></Link>
                <Link to="/products"> <h1>Products</h1></Link>
                <Link to="/singout"><h1>Sign out</h1></Link>
                
            </div>
            
        </header>
    )
}

export default Navbar;