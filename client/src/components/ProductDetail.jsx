import { useEffect, useState } from "react";


const ProductDetail = ({product}) =>{

    const handleClick= async()=>{
      
      const response=await fetch(`http://localhost:5001/api/products/${product._id}`, {
        method: 'DELETE',
        // credentials: 'include', // Include cookies
       
    })
      console.log(response);
      try{
         const json=await response.json()
      }
      catch(error){
        console.log(error);
      }
      // return response.json();
      
      
      
    }

    return(
       <div className="product-details">
         <h4>{product.ProductName}</h4>
         <p><strong>Price : ${product.price}</strong></p>
         <p><strong>Quantity: {product.quantity}</strong></p>
         <p><strong>Decription: {product.Description}</strong></p>
         <button onClick={handleClick}>Delete</button>
       </div>
    )
}


export default ProductDetail;