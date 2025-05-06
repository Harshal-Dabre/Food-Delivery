import React, { useState } from "react";
import '../App.css';
import Restaurantcard from "./Restaurantcard";
import {  ResList } from "./config";
import { FaSearch } from 'react-icons/fa';


function filterData(searchTxt,restaurants){
   const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchTxt));
   return filterData ;

}

function matchResult(item, searchTxt){
  if(searchTxt)
    return item?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  return false
}


const Body = () => {

  
  const [restaurants, setRestaurants] = useState(ResList) ;
  const [searchTxt, setSearchTxt] = useState("") ;
  const [suggestionList, setSuggestionList] = useState(ResList);
 

  return(
    <>
    <div className="body">
       
        <div className="search-container">
           <div className="search-bar">
            <input type="text"
              className="search-input"
              placeholder="Search for restaurant and food"
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value) ;
                  
              }} />
           
            <button className="search-btn" onClick={()=>{
                const data = filterData(searchTxt, restaurants)
                setRestaurants(data) ;
              }}>
               <FaSearch className="search-icon" />
            </button>
           </div>
           <div className="suggestion-box">
            {
              suggestionList.filter((item) => matchResult(item, searchTxt)).map((item) => (
                <div className="suggestionList" key={item?.data?.id} >
                  {item?.data?.name}
                </div>
              ))
              
            }
          </div> 

  
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