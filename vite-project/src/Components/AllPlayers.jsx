import React from "react";
import { useFetchPlayersQuery } from "../Api/puppyBowlApi";
import{ Link }from 'react-router-dom';



const AllPlayers = (players) => {
    const {data: fetchPlayersData, error, isLoading } = useFetchPlayersQuery();
    console.log(fetchPlayersData);

    if(isLoading) {
        return <h1>Laoding...</h1>
    }
    if (error) {
        return <h1>fetch failed</h1>
    }
    return (
        <>
        <div className="intro"> <h1>Welcome to the Puppy Bowl Event</h1>
         <p>Come and join us for a fun-filled day of adorable puppy football</p>
         <p>Get ready to meet the talented competing in this years Puppy Bowl... and here they are:</p>
         </div>
         <Link className="new-btn" to={`/newplayer`}>Create New Player</Link>
       <div className="players">
          
         {/* Map through the data array and generate a div for each player */}
         {fetchPlayersData.data.players.map((player) => (
           // Use the player's ID as the key for this div
           <div key={player.id} className="player-card">
             {/* Display the player's image, with the player's name as alt text */}
             
             <div className="player-details">
               
               <h2 className="text"   >  {player.name} </h2> 
               <p className="text"  > Breed: {player.breed} </p> 
               <p className="text"  > Status: {player.status} </p>
            <img className="player-image-container" src={player.imageUrl} alt={player.name}  />
            <Link className="detail-btn" to={`/details/${player.id}`}>SEE DETAILS</Link>
          
             </div>
           </div>
         ))}
       </div>
       </>
    );
};

export default AllPlayers;