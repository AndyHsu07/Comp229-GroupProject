import {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Singup=()=>{
    const [email,setEmail]= useState()
    const [name, setName] = useState()
    const [password, setPwd]= useState()
    const [error , setError] = useState('');
    const Navigate = useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const user= {email, name, password};

        const response= await fetch("http://localhost:5001/auth/signup",{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json= await response.json()

        if(!response.ok){
            setError(json.error);
        }else{
            setEmail('')
            setName('')
            setPwd ('')
            setError(null)
            console.log('New User added', json)
        }

     

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <div className="field">
                    <input type="text" placeholder="email" id="email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
                    </div>
                    <div className="field">
                    <input type="text" placeholder="name" id="name" onChange={(e)=>setName(e.target.value)}  value={name}/>
                    </div>
                    <div className="field">
                        <input type="password" placeholder="password" id="password" onChange={(e)=>setPwd(e.target.value)}  value={password}/>
                    </div>
                    <button>Sign up</button>
                    
                    {error && <div className="error">{error}</div>}
               </form>
        </div>
    )
}

export default Singup;