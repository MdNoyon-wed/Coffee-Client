import React, { useContext } from 'react';
 
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';


const SingUp = () => {
  const {createUser} =useContext(AuthContext)
  

  const handleSignUp = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);

    const {email,password, ...rest} =
     Object.fromEntries(formData.entries());

  


 
    console.log(email,password)

    createUser(email,password)
    .then(result => {
      console.log(result.user)

         const userProfile = {
      email,
      ...rest,
      creationTime: result.user?.metadata?.creationTime,
      lastSignInTime: result.user?.metadata?.lastSignInTime

     }

  // save profile info  user database

  fetch('http://localhost:4000/users',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(userProfile)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your account is created",
  showConfirmButton: false,
  timer: 1500
});

    }
 
  })


    })
    .catch(error=>{
      console.log(error)
    })
   
  }
   
 
    return (
    <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">sing Up</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          
          <label className="label">Name</label>
          <input type="text" name='name' className="input"
           placeholder="Name" />

          <label className="label">Phone Number</label>
          <input type="text" name='Phone' className="input"
           placeholder="Phone Number" />

          <label className="label">Address</label>
          <input type="text" name='address' className="input"
           placeholder="Address" />

          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input"
           placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input"
           placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button  className="btn btn-neutral mt-4">Sing Up</button>
        </form>
      </div>
    </div>
  </div>
</div>
  
    </div>
  );
};

export default SingUp;