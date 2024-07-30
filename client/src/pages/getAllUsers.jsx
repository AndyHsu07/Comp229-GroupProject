import react from 'react';
import Users from "../user/Users";
import auth from '../../auth/auth-helper';
import {useState, useEffect} from 'react';

const AllUsers=()=>{

    const [users, setUsers]= useState(null)
    
    useEffect(()=>{

        const fetchUsers= async()=>{
            // const jwt = auth.isAuthenticated() 
            const response=await fetch('http://localhost:5001/api/users',{
                
            })
            const json= await response.json()
            

            if(response.ok){
                setUsers(json);
                
            }
        }

        fetchUsers();

    }, []);

    return(
        <div >
               
                {users && users.map((user)=>(
                    
                    <Users key={user._id} user={user}/>
                )
                )}
            
        </div>
    )
}


export default AllUsers;