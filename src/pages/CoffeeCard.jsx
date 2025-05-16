import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {

  const {_id} =coffee
  
  const handelDelete = (_id) => {
    console.log("delete",_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  console.log(result.isConfirmed)
  if (result.isConfirmed) {

    // deleting the coffee
    fetch(`http://localhost:4000/coffees/${_id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
            Swal.fire({
      title: "Deleted!",
      text: "Your Coffeer has been deleted.",
      icon: "success"
    });

      }
      
    })

  }
});

  }
 
  return (
    <div>
     <div className="card lg:card-side bg-base-100 border shadow-sm">
  <figure>
    <img  
      src={coffee.photo}
      alt="Album" />
  </figure>
  <div className="">
    <div className="flex justify-around w-full mt-10 ">
      <div className="lg:ml-10">
                  <h2 className="card-title">{coffee.name}</h2>
    <p>{coffee.taste}</p>
    <p>{coffee.details}</p>
    <p>{coffee.supplier}</p>

      </div>

    <div className="card-actions justify-end lg:ml-20">
      <div className="join join-vertical">
  <button className="btn join-item">
  View
  </button>

  <Link to={`/updateCoffee/${_id}`}>
    <button className="btn join-item">Edit</button>
    </Link>

  <button onClick={ ()=> handelDelete(_id)}
   className="btn join-item">X</button>
</div>

    </div>

   
    </div>
  </div>
</div>
    </div>
  );
};

export default CoffeeCard;