import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <div>
          <h1>Superhero Memory Game</h1>
        </div>
        <div id="score">
          <h2>Score</h2>
          <p>Pairs Clicked: <span id="pairs_clicked">0</span></p>
          <p>Pairs Guessed: <span id="pairs_guessed">0</span></p>
        </div>
        <div id="memory_board"></div>
        <script type="module" src="./src/assets/js/memory.js"></script>
        <script type="module" src="./src/assets/js/main.js"></script>
    </>
  )
}

export default App
