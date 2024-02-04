import React from "react";
import { useGetPuppyQuery } from "../Api/puppyBowlApi";
import { useNavigate, useParams } from "react-router-dom";



const SinglePlayers = () => {


  const {id} = useParams();
    console.log(useGetPuppyQuery(id))
    console.log(id);
    const {data, isError, isLoading } = useGetPuppyQuery(id);

    if(isLoading) {
        return <h1>Laoding...</h1>
    }
    if (isError ) {
        return <h1>Single fetch failed</h1>
      }
      console.log(data.data)
      const {player} = data.data
    return (
        <>
        <div className="intro"> <h1>Single Dog Details</h1>
         
         </div>
       <div className="players">
          
         {/* Map through the data array and generate a div for each player */}
        
           {/* // Use the player's ID as the key for this div */}
           <div className="player-card">
             {/* Display the player's image, with the player's name as alt text */}
             
             <div className="player-details">
               
               <h2 className="text"   >  {player.name} </h2> 
               <p className="text"  > Breed: {player.breed} </p> 
               <p className="text"  > Status: {player.status} </p>
            <img className="player-image-container" src={player.imageUrl} alt={player.name}  />
             </div>
           </div>
       </div>
       </>
    );
};

export default SinglePlayers;