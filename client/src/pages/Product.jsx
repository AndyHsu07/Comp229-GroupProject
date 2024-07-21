import { useEffect, useState } from "react";
import ProductDetail from '../components/ProductDetail';
import ProductForm from "../components/ProductForm";




const Product= ()=>{

    const [products, setProducts]= useState(null)

    useEffect(() =>{
        const fetchUsers = async() =>{
            const response= await fetch(`http://localhost:5001/api/products/`)
            const json = await response.json()
            
            if(response.ok){
                setProducts(json);
            }
        }

        fetchUsers();

    }, [])

    return (
        <div className="home">
               <div className="users">
                 {products && products.map( (product)=>(
                    <ProductDetail key={product._id} product={product}/>
                 )
                 )}
                 
               </div>
               <ProductForm />
        </div>
    )
}




export default Product;