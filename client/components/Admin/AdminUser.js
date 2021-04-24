import React from "react";
import { Link } from "react-router-dom";

const AdminUser = (props) => {

   const { username, id, isAdmin} = props.user
   const { handleDelete } = props

   return (
      <div className="single-card">
         <div className='card-30'>
            <Link to={`/admin/users/${id}`}>
               <h4>{username}</h4>
            </Link>
            <p>ID: {id}</p>
         </div>
         <div className='card-70'>
            <p><strong>{isAdmin === true ? "admin" : " "}</strong></p>
         </div>
         <button
            className='remove-button'
            onClick={() => handleDelete(id)}
         > X
      </button>
         <Link to={`/admin/users/${id}/edit`}>
            <button> Edit User </button>
         </Link>
      </div>
   );
};

export default AdminUser
