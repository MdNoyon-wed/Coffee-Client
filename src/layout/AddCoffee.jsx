import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries())
    console.log(coffeeData)

    // send coffee data to  the db
    
    fetch('http://localhost:4000/coffees',{
      method:'POST',
      headers:{
        'content-type':'application/json'

      },
      body:JSON.stringify(coffeeData)
    })
    .then(rse => rse.json())
    .then(data=>{
      if(data.insertedId){
            console.log('after adding coffee',data)
       
      Swal.fire({
         title: "Coffee added Done!",
         icon: "success",
         draggable: true
            });
         
      }
  
    })
  


  }
  return (
    <div>
     <div className="">
      <h2 className='text-6xl mb-5'>Add New Coffee</h2>
      <p>It is a long established fact that a reader will be 
        distraceted by the readable content of a page when looking
         at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, 
        as opposed to using Content here.</p>
     </div>
     <form onSubmit={handleAddCoffee}>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">


 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full"
   placeholder="Quantity Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' className="input w-full" 
  placeholder="Supplier Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Taste</label>
  <input type="text" name='taste' className="input w-full"
   placeholder="Taste Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Category</label>
  <input type="text" name='category' className="input w-full"
   placeholder="Category Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full"
   placeholder="Details Name" />
</fieldset>
      </div>

 
  <label className="label mt-5">Photo URL</label>
  <input type="text" name='photo' className="input w-full mt-3"
   placeholder="Photo URL" />
 
      <input type='submit' className='btn w-full mt-5' value="Add Coffee"/>
     </form>
    </div>
  );
};

export default AddCoffee;