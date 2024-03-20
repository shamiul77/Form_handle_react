


import React, { useState } from 'react'

function Data() {
  let obj={
    name: "",
    email:"",
    password:""

  }
    let [user,setUser] = useState(obj)
    let {name,email,password} = user;

    const handleSubmit=(event)=>{
        event.preventDefault()
        setUser[{...user,[event.target.name]:event.target.value}]
        console.log(user);
      
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" class="form-control" value={name}   name='name' onChange={(event)=>{
        setUser({...user, [event.target.name] :event.target.value})
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}  name='email' onChange={(event)=>{
        setUser({...user, [event.target.name] :event.target.value})
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} name='password' onChange={(event)=>{
       setUser({...user, [event.target.name] :event.target.value})
    }}/>
  </div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Data
