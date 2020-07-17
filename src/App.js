import React,{setState, useState, useEffect} from 'react'
import "./App.css"
import "./index.css";
import Wether from "./Wether.jsx";
import FormCOmpnent from "./FormCOmpnent.jsx";
 const API_key="ff01666607327d77decf86b7fe91e31d"
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  //ff01666607327d77decf86b7fe91e31d
  //api.openweathermap.org/data/2.5/weather?q=London

 class App extends React.Component {
     
   constructor(){
    
     super();
     this.state={
       city:undefined,
       country:undefined,
       icon:undefined,
       main:undefined,
       celsius:undefined,
       temp_max:undefined,
       temp_min:undefined,
       description:"",
       error:false

     };
   
     // this.getWether(e);
   }

    calCelsius(temp){
        let cell=Math.floor(temp - 273.15);
        return cell;
    }
   getWether = async(e)=>{
      e.preventDefault();
    console.log(e)
      console.log("e")
     const city=e.target.elements.city.value;
       const country=e.target.elements.country.value;
      if(city && country){
        
     const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)

     const response=await api_call.json();
  
       this.setState({
     city:response.name,
     country:response.sys.country,
     celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
    
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description

   })
      }else{
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_key}`)

     const response=await api_call.json();
    
       this.setState({
     city:response.name,
     country:response.sys.country,
     celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
    
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description


   })

  console.log(response);
      }
      
    
   }
   
 

  render() {
    
    return (
      
      <div className="container-custom mt-5">
        
      <div className="col-md-12 mx-auto">
         <FormCOmpnent  loadWether={this.getWether} error={this.state.error} />
      </div>
       
       <Wether country={this.state.country} city={this.state.city} temp_max={this.state.temp_max} temp_min={this.state.temp_min} description={this.state.description} celsius={this.state.celsius}/>
    </div>
     
      
    )
  }
}
export default App


