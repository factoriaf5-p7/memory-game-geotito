import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>      
        <nav>
            <h1>Superhero Memory Game</h1>
            <Link  to='/'><button>Hero</button></Link>
            <Link  to='/game'><button>Game</button></Link>
            <Link  to='/settings'><button>Settings</button></Link>
        </nav>
      <p> Nivel de dificultad: {localStorage.getItem("level") != null ? localStorage.getItem("level") : "medium"}</p>
  </>
  )
}
