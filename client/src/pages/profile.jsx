import react , {useState, useEffect} from 'react';
import auth from '../../auth/auth-helper';
import { jwtDecode } from 'jwt-decode'
import {read, update, remove} from './api-user'
import { useNavigate, useParams } from 'react-router-dom';
import { Link} from 'react-router-dom'

import {  useNavigation } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Profile= ({match})=>{
    
    const navigate= useNavigate();

    const [user, setUser]= useState({
        name: '',
        email: '',
    });

    const [msg ,setMsg]=useState('');
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated() 
    const { id } = useParams();
    const [open, setOpen]=useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target; 
        
        setUser((prevUser) => ({
          ...prevUser, 
          [name]: value, 
        }));
        console.log(user);
      };
    
    useEffect(() => {
        

        const abortController=new AbortController()
        const signal = abortController.signal
        
        read( id,{t: jwt.token},signal)
            .then((data)=>{
                if(data && data.error){
                    setRedirectToSignin(true)
                }else{
                    setUser(data)
                }
        })
            // return function cleanup(){
            //     abortController.abort()
            // }

             },[id])
        


    const handleUpdate=async(e)=>{
        e.preventDefault()
        
        
        await update( id,{t: jwt.token},user)
            .then((data)=>{
                if(data){
                    setUser(data)
                    setMsg("Updated successfully!");
                }
        })


    }

    const handledelete=async(e)=>{
        e.preventDefault()
        
        
        await remove( id,{t: jwt.token},user)
            .then((data)=>{
                if(data){
                    setUser({
                        name: '',
                        email: '',
                    })
                    setMsg("Delete successfully!");
                    setOpen(true);
                    
                }
        })


    }

    const handleSignIn=()=>{
        handleClose();
        navigate("/api/users");
    }

  const handleClose = () => {
    setOpen(false);
  };
            
    return (<>
    <div className="Profile-container">
        {/* <form> */}
      
        <h1>My Profile</h1>
        <div>
            <label>Name:</label>
            <input type="text"
                    name='name' 
                    onChange={handleChange}
                    value={user.name}
                    />
        </div>
        <div>
        <label>Email:</label>
        <input type="text"
                name='email' 
                onChange={handleChange}
                value={user.email}
                />
        </div>
        <button onClick={handleUpdate}>Modify</button>
        <button onClick={handledelete}>delete</button>
        {msg && <div className="error">{msg}</div>}
        
        <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Account deleted</DialogTitle>
                        <DialogContent>
                        <DialogContentText>Delete successfully!</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSignIn}>
                            Back to user List
                            </Button>
                        
                        </DialogActions>
                    </Dialog>


    </div>
    </>)

   


}



export default Profile;





