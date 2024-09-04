import React from "react";


const RestaurantCard = ({name,cuisines,costForTwo,areaName,cloudinaryImageId}) => {

 

    return(
     
        <>
         
          <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
          
          <img className="res-logo"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId }
            alt="res-logo" />
              
               <h3 className="heading">{name}</h3>
               <h4 className="heading">{cuisines.join(",")}</h4>
               <h4 className="heading">{costForTwo}</h4>
               <h4 className="heading">{areaName}</h4>
         
         
       </div>
        </>
    
    )
}

export default RestaurantCard ;