import { useEffect, useState } from "react";
import ProdcutDetail from '../components/ProductDetail';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



const Login= ()=>{

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
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json=await response.json()
        if(!response.ok){
            setError(json.error);
        }else{
            setEmail('')
            setPwd('')
            setError(null)
            Navigate('/products');
            console.log('Login in successfully', json)
        }

    }

    return(
        <div>
        <p>Please login in:</p>
               <form onSubmit={handleSubmit}>
                   
                    <input type="text" placeholder="email"
                            id="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/> 
                    
                    <input type="password" placeholder="password"
                            id="password"
                            onChange={(e)=>setPwd(e.target.value)}
                            value={password}/>
                    
                    <button>Log in</button>
                    <Link to="/signup"><button>Sign up</button></Link>
                    
                    {error && <div className="error">{error}</div>}
                    
               </form>
        </div>
    )
}

export default Login;