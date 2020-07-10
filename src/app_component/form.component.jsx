import React from 'react'
import './form.style.css'

const Form = (props) => {
     return (
          <div className="container">
               <div>{props.error ? error() : null}</div>
               <form onSubmit={props.loadweather}>
               <h1 className="title justify-content-center pb-5">Weather Broadcast</h1>
                    <div className="row d-flex justify-content-center">
                    
                         <div className="col-md-3">
                              <input
                                   type="text"
                                   className="form-control offset-md-1"
                                   name="city"
                                   autoComplete="off"
                                   placeholder="City"
                              />
                         </div>
                         <div className="col-md-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   name="country"
                                   autoComplete="off"
                                   placeholder="Country"
                              />
                         </div>
                         <div className="col-md-3 mt-md-0 text-md-left">
                              {/* <button className="btn btn-success">Get Weather</button> */}
                              {<button className="button"><span>Get Weather </span></button>} 
                         </div>
                    </div>
               </form>
          </div>
     )
}


function error() {
     return (
          <div className="alert alert-danger mx-5" role="alert">
               Please Enter City and Country
          </div>
     )
}



export default Form
