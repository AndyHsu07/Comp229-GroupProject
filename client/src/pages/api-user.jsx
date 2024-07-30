const read = async (id, credentials, signal) => {
    try {
      let response = await fetch('http://localhost:5001/api/users/' + id, {
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


const update= async(id,credentials,user) =>{
    try{
            let response=await fetch(`http://localhost:5001/api/users/${user._id}`,{
            method: "PATCH",
            body: JSON.stringify(user),
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

const remove= async(id,credentials,user) =>{
  try{
          let response=await fetch(`http://localhost:5001/api/users/${user._id}`,{
          method: "DELETE",
          body: JSON.stringify(user),
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