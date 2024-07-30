import react , {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {read, update, remove} from './api-product'
import auth from '../../auth/auth-helper';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const EditProduct=({match})=>{

    const navigate= useNavigate();
    
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct]= useState({
        ProductName: "",
        quantity: "",
        price: "",
        Description: "",
    });
    const [msg ,setMsg]=useState('');
    const [open, setOpen]=useState(false);
    const jwt = auth.isAuthenticated() 
    
    const handleChange = (e) => {
        const { name, value } = e.target; 
        
        setProduct((prevUser) => ({
          ...prevUser, 
          [name]: value, 
        }));
        // console.log(product);
      };

      useEffect(() => {
        

        const abortController=new AbortController()
        const signal = abortController.signal
        
        read( id,{t: jwt.token},signal)
            .then((data)=>{
                if(data && data.error){
                    setRedirectToSignin(true)
                }else{
                    setProduct(data)
                }
        })
            // return function cleanup(){
            //     abortController.abort()
            // }

             },[id])

    const handleUpdate=async()=>{
        
        
        
        await update( id,{t: jwt.token},product)
            .then((data)=>{
                if(data){
                    setProduct(data)
                    setOpen(true);
                    setMsg("Updated successfully!");
                }
        })


    }

    const handleSignIn=()=>{
        handleClose();
        navigate("/products");
    }

    const handleClose = () => {
        setOpen(false);
     };

    return(<>
        <div className="EditProduct-container">
      
        <h1>Edit the Product</h1>
        <div>
            <label>Product Name:</label>
            <input type="text"
                    name='name' 
                    onChange={handleChange}
                    value={product.ProductName}
                    />
        </div>
        <div>
        <label>Price:</label>
        <input type="text"
                name='price' 
                onChange={handleChange}
                value={product.price}
                />
        </div>
        <div>
        <label>Quantity:</label>
        <input type="text"
                name='quantity' 
                onChange={handleChange}
                value={product.quantity}
                />
        </div>

        <div>
        <label>Description:</label>
        <input type="text"
                name='Description' 
                onChange={handleChange}
                value={product.Description}
                />
        </div>
        <button onClick={handleUpdate}>Modify</button>
       
        <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Product Updated</DialogTitle>
                        <DialogContent>
                        <DialogContentText>Updated successfully!</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSignIn}>
                            Back to Prodcuts
                            </Button>
                        
                        </DialogActions>
                    </Dialog>

        </div>
    </>)
}

export default EditProduct;