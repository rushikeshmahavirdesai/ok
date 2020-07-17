import React,{useState} from 'react'

export default function Wether(props) {
  
    return (
       <div className="row">
             <div className="col-10 mx-auto col-md-8 mt-5 p-4">
                 <div className="card-custom p-1">
                 <h1>{props.city}, {props.country}</h1>
                   
                     <img src={`http://openweathermap.org/img/wn/10d@2x.png`}/>
                      <h5>{props.celsius} &deg;</h5>
                       <h6><span className="mr-4">Min {props.temp_min}&deg;</span><span className="ml-4"> Max {props.temp_max}&deg;</span></h6>
                      <h5>{props.description}</h5>
                 </div>
             </div>
        </div>
    )
}
