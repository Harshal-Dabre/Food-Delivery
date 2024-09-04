import React, { useState } from "react";
import '../App.css';
import Restaurantcard from "./Restaurantcard";
import {  ResList } from "./config";


function filterData(searchTxt,restaurants){
   const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchTxt));
   return filterData ;

}

const Body = () => {

  
  const [restaurants, setRestaurants] = useState(ResList)
  const [searchTxt, setSearchTxt] = useState("") ;

  return(
    <>
    <div className="body">
       
       <div className="search-container">
            <input type="text"
            className="search-input"
            placeholder="search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value) ;
                
            }} />
           
           <button className="search-btn" onClick={()=>{
              const data = filterData(searchTxt, restaurants)
              setRestaurants(data) ;
            }}>Search </button>

            

          </div>
       
         
        <div className="res-container">
        {
         restaurants.map((restaurant) => {
          return  <Restaurantcard {...restaurant.data} key= {restaurant.data.id } />
           
         })
        }
          
      
              
        </div>
    </div>
    </>
  )  
};

export default Body ;