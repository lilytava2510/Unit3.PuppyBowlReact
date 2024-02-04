import React from 'react';
import { useCreatePlayerMutation } from '../Api/puppyBowlApi';
import { useState } from 'react';

export default function NewPlayers(){
const [createPlayer] = useCreatePlayerMutation();
const [name, setName] = useState("")
const [breed, setBreed] = useState("")


const handleSubmit = (e) => {
  e.preventDefault();
  createPlayer({name: "Rover", breed: "cavapoo"})
  setBreed('')
  setName('')
 
}



    return (
        <form onSubmit={handleSubmit}>
        <h3>New Player</h3>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}
          placeholder='Enter new player name'  />
              <label htmlFor='breed'>Breed:</label>
          <input type='text' id='breed' value={breed} onChange={(e) => setBreed(e.target.value)}
          placeholder='Enter new players breed'  />
             
        </div>
  
        <br />
  
        <button type='submit' >Submit</button>
      </form>
        )
    }
   