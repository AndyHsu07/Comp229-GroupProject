const read = async (id, credentials, signal) => {
    try {
      let response = await fetch('http://localhost:5001/api/product/' + id, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }


const update= async(id,credentials,product) =>{
    try{
            let response=await fetch(`http://localhost:5001/api/product/${product._id}`,{
            method: "PATCH",
            body: JSON.stringify(product),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })

            return await response.json()
    }catch(err){
        console.log(err)
    }
}

const remove= async(id,credentials,product) =>{
  try{
          let response=await fetch(`http://localhost:5001/api/product/${product._id}`,{
          method: "DELETE",
          body: JSON.stringify(product),
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + credentials.t
          }
      })

          return await response.json()
  }catch(err){
      console.log(err)
  }
}

  export {read, update, remove}