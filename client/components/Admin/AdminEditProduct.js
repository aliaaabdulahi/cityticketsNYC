import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

 class AdminEditProduct extends React.Component {
 // not finished

   render() {
      
      return (
            <div >
               <h1>Update Product</h1>
               <div >
                  <form >
                     <div>Product ID: {} </div>
                     <div className='row'>
                        <div className="col-20">
                           <label htmlFor='name'>Event Name:</label>
                        </div>
                        <div className='col-70'>
                           <input name='name' required />
                        </div>
                     </div>

                      <div className='row'>
                        <div className='col-20'>
                           <label htmlFor='description'>Description:</label>
                        </div>
                        <div className='col-70'>
                           <input
                              name='description'
                              required  />
                        </div>
                     </div>

                     <div className='row'>
                        <div className="col-20">
                           <label htmlFor="imageUrl">imageUrl:</label>
                        </div>

                        <div className="col-70">
                           <input
                              name="imageUrl"
                              type="text"
                           />
                        </div>
                     </div>

                     <div className='form-button-group'>
                        <button type='submit'>Save Change </button>
                        {/* <Link to={`/admin/products/${this.props.match.params.id}`}> */}
                           <button>Cancel</button>
                        {/* </Link> */}
                     </div>
                  </form>
               </div>
            </div>
         )
      }
}               



export default AdminEditProduct;
