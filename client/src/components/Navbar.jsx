import {Link} from 'react-router-dom';

const Navbar= ()=>{
    return(
        <header>
            <div className="container">
                <Link to="/"> <h1>Home</h1> </Link>
                <Link to="/login"><h1>Login</h1></Link>
                <Link to="/products"> <h1>Products</h1></Link>
            </div>
        </header>
    )
}

export default Navbar;