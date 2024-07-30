import react , {useState, useEffect} from 'react';
import auth from '../../auth/auth-helper';
import { jwtDecode } from 'jwt-decode'
import {read, update} from './api-user'
import { useParams } from 'react-router-dom';
import { Link} from 'react-router-dom'

import { Navigate, useNavigation } from 'react-router-dom';


const Profile= ({match})=>{
    
    const [user, setUser]= useState({
        name: '',
        email: '',
    });

    const [msg ,setMsg]=useState('');
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated() 
    const { id } = useParams();
    
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
        


    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        
        await update( id,{t: jwt.token},user)
            .then((data)=>{
                if(data){
                    setUser(data)
                    setMsg("Updated successfully!");
                }
        })


    }
            
    return (<>
    <div className="Profile-container">
        <form onSubmit={handleSubmit}>
        
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
        <button>Modify</button>
        {msg && <div className="error">{msg}</div>}
        </form>
    </div>
    </>)

   


}



export default Profile;





