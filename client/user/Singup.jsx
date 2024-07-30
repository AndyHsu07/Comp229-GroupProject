import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "@mui/material";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Singup=()=>{
    const [email,setEmail]= useState()
    const [name, setName] = useState()
    const [password, setPwd]= useState()
    const [error , setError] = useState('');
    const [open, setOpen] = useState(false);
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
            setOpen(true);
            console.log('New User added', json)
        }

     

    }

    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-container">
                   <p>Sing up</p>
                    <input type="text" placeholder="email" id="email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
                    <input type="text" placeholder="name" id="name" onChange={(e)=>setName(e.target.value)}  value={name}/>
                    
                        <input type="password" placeholder="password" id="password" onChange={(e)=>setPwd(e.target.value)}  value={password}/>
                    
                    <button>Sign up</button>
                    
                    {error && <div className="error">{error}</div>}
               </form>

               <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>New User successfully created</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/login">
                        <Button onClick={handleClose}>
                        Sign In
                        </Button>
                    </Link>
                </DialogActions>
             </Dialog>
             
        </div>
    )
}

export default Singup;