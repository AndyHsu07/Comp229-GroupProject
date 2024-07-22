import { useEffect, useState } from "react";


const ProductDetail = ({product}) =>{

    return(
       <div className="product-details">
         <h4>{product.ProductName}</h4>
         <p><strong>Price : ${product.price}</strong></p>
         <p><strong>Quantity: {product.quantity}</strong></p>
        <p><strong>Decription: {product.Description}</strong></p>
       </div>
    )
}


export default ProductDetail;