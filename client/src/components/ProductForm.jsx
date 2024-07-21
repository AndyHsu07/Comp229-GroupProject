import {useState} from 'react'


const ProductForm =()=>{

    const [ProductName, setProduct]= useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description , setdescription] = useState('');
    const [error , setError] = useState('');

    

    const handleSubmit= async(e)=>{
        e.preventDefault();

        const product= {ProductName, price, quantity, description }
        const response=await fetch(`http://localhost:5001/api/products`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json= await response.json()

        if (!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setProduct('')
            setPrice('')
            setQuantity('')
            setdescription('')
            setError(null)
            console.log('new Product added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Product</h3>

            <label>Product Name:</label>
            <input 
                type="text"
                onChange={(e)=>{setProduct(e.target.value) }}
                value={ProductName} />
            
            <label>Price:</label>
            <input 
                type="number"
                onChange={(e)=>{setPrice(e.target.value) }}
                value={price} />

            <label>Quantity:</label>
            <input 
                type="number"
                onChange={(e)=>{setQuantity(e.target.value) }}
                value={quantity} />
            
            <label>Description:</label>
            <input 
                type="text"
                onChange={(e)=>{setdescription(e.target.value) }}
                value={description} />

            <button>Add Product</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default ProductForm;