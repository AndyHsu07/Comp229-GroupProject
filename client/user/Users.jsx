import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Users = ({user})=>{
    

    const handleClick=async()=>{

        const response=await fetch(`http://localhost:5001/api/users/${user._id}`,{
            headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
            }
        }
        )

        const json=await response.json();
        if(response.ok){
            // console.log(json);
            setUser(json);
            <Navigate to={"/api/users/:id"}/>
        }
    }



    return(
        <div className="allUser-container">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '20px',marginTop: '20px' }} />
            <Link className='link' to={"/api/users/"+user._id}>{user.name}</Link>
        </div>
    )

}



export default Users;