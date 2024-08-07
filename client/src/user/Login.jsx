import { useRef, useEffect, useState } from "react";
import ProdcutDetail from "../components/ProductDetail";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import auth from '../../auth/auth-helper';
import {useSelector,useDispatch} from 'react-redux';



const Login= (props)=>{


    
    const [email, setEmail] = useState('')
    const [password, setPwd] = useState('')
    const[error, setError]= useState('');

    const Navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
      
        const user={email ,password}
        console.log(user);
        const response=await fetch(`http://localhost:5001/auth/signin`,{
            method: "POST",
            body: JSON.stringify(user),
            credentials: 'include', 
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json=await response.json()
        console.log(json);
        if(!response.ok){
            setError(json.error);
            
        }else{
            
            setEmail('')
            setPwd('')
            setError(null)
            auth.authenticate(json);
            console.log('Login in successfully', json)
            Navigate('/products');
        }

    }

    // const {from} = props.location.state || {
    //     from: {
    //       pathname: '/'
    //     }
    //   }
    //   const {redirectToReferrer} = values
    //   if (redirectToReferrer) {
    //       return (<Redirect to={from}/>)
    //   }

    return(
        <div>
        
               <form onSubmit={handleSubmit} className="login-container">
                <p>Log in</p>
                    
                    <input type="text" placeholder="email"
                            id="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/> 
                    
                    <input type="password" placeholder="password"
                            id="password"
                            onChange={(e)=>setPwd(e.target.value)}
                            value={password}/>
                    
                    <button >Log in</button>
                    <Link to="/signup"><button>Sign up</button></Link>
                    
                    {error && <div className="error">{error}</div>}
                    
               </form>
        </div>
    )
}

export default Login;


