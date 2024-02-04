import React from 'react'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import NewPlayers from './Components/NewPlayer'
import SinglePlayers from './Components/SinglePlayers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
<>

  
    <Router>
      <Routes>
   
     <Route path="/" element={ <AllPlayers />} />
     <Route path="/newplayer" element={  <NewPlayers />} />
      <Route path="/details/:id" element={<SinglePlayers />} />
      </Routes>
    </Router>
</>

  )
}

export default App
