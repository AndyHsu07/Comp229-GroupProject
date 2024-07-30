import {Link} from 'react-router-dom';
import Signout from '../user/Signout';
import auth from '../../auth/auth-helper';

import { useEffect } from 'react';

function Navbar() {
    
    useEffect(() => {
        console.log('Navbar rendered');
      }, []);
    
    return(
        <header >
                <Link to="/"> <img src="../../public/logo.png" alt="" height="100px"/> </Link>
            
            <div className="container">
                        {!auth.isAuthenticated() && (
                            <span>
                            <Link to="/login"><button>Log in</button></Link>
                             <Link to="/signup"><button >Sign Up</button></Link>
                             
                            </span>
                        ) 
                        }

   
                
                
                 {
                auth.isAuthenticated() && (<span>
                <Link to={"/api/users/" + auth.isAuthenticated().user._id}>
                    <button>My Profile</button>
                </Link>
                {/* <Link to="/api/users/:id"><h1>My Profile</h1></Link> */}
                <Link to="/api/users"><button>User list</button></Link>
                <Link to="/products"> <button>Products</button></Link>
                <Link to="/singout"><button>Sign out</button></Link>
                 </span>)
             }


            </div>
            
        </header>

    )
}

export default Navbar;

