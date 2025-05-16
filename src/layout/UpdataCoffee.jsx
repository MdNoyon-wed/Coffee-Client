import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdataCoffee = () => {
  const coffee = useLoaderData()

  const {name,quantity,supplier,taste,category,details,photo} =coffee;

 
  const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries())
    console.log(updateCoffee)

    // send updated coffee to the db
    // fetch(`http://localhost:4000/coffees/${_id}`,{

    //   method:"PUT",
    //   headers: {
    //     'content-type':'application/json'
    //   },
    //   body:JSON.stringify(updateCoffee)
      
    // })
  
    .then(res=>res.json())
    .then(data=> {
      if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

      }
    
    })
  


  }
  return (
    <div>
      <h3>Updata</h3>

       <div>
     <div className="">
      <h2 className='text-6xl mb-5'>Updata Coffee</h2>
  
     </div>
     <form onSubmit={handleUpdateCoffee}>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">


 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Name</label>
  <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' defaultValue={quantity} className="input w-full"
   placeholder="Quantity Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' defaultValue={supplier} className="input w-full" 
  placeholder="Supplier Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Taste</label>
  <input type="text" name='taste' defaultValue={taste} className="input w-full"
   placeholder="Taste Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Category</label>
  <input type="text" name='category' defaultValue={category} className="input w-full"
   placeholder="Category Name" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300
  rounded-box w-xs border p-4">
  <label className="label">Details</label>
  <input type="text" name='details' defaultValue={details} className="input w-full"
   placeholder="Details Name" />
</fieldset>
      </div>

 
  <label className="label mt-5">Photo URL</label>
  <input type="text" name='photo' defaultValue={photo} className="input w-full mt-3"
   placeholder="Photo URL" />
 
      <input type='submit' className='btn w-full mt-5' value="Update Coffee"/>
     </form>
    </div>
    </div>
  );
};

export default UpdataCoffee;