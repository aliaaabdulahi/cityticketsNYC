import React from "react";
import { Link } from "react-router-dom";

const AdminProduct= (props) => {

   const { name, description, id } = props.product
   const { handleDelete } = props

   return (
      <div>
         <div className='card-30'>
            <Link to={`/admin/products/${id}`}>
               <h4>{name}</h4>
            </Link>
            <p>ID: {id}</p>
         </div>
         <div className='card-70'>
            <p><strong>Description: </strong>{description}</p>
         </div>
         <button
            className='remove-button'
            onClick={() => handleDelete(id)}
         >  Delete Product
         </button>
         <Link to={`/admin/products/${id}/edit`}>
            <button> Edit Product </button>
         </Link>
      </div>
   );
};

export default AdminProduct
