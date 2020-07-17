import React from 'react'

export default function FormCOmpnent(props) {
   
    const load=(e)=>{
     e.preventDefault();
    
    }
    return (
       <form onSubmit={props.loadWether}>
       <br/>
           <div className="row mx-auto p-2 mt-5 form-custom">
           
            <div className="col-md-4 mx-auto col-4">
               <input type="text" placeholder="City" name="city" className="form-control" />
            </div>
              <div className="col-md-4 mx-auto col-4">
               <input type="text" placeholder="Country" name="country" className="form-control" />
            </div>
             <div className="col-md-4 mx-auto col-4">
             <button className="btn btn-primary">Get Weather</button>
            </div>
        </div>
       </form>
    )
}
function error(){
    return(

        <div className="alert alert-danger p-3" role="alert">
           <h4>Search The City And Country</h4>
        </div>
    )
}
