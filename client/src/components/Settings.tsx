import {useState} from 'react'
import { Nav } from './Nav'

export const Settings = () => {

  console.log(localStorage.getItem("level"))

  const [difficulty, setDifficulty] = useState(localStorage.getItem("level"))

  const [theme, setTheme] = useState("heroes")

  const onOptionChange = e => {
    setDifficulty(e.target.value)
  }
  const onSaveSettings = () => {
    localStorage.setItem("level" , difficulty)
    alert("Settings saved")
    window.location.href ="/game"
  }

  return (
    <>
    <Nav />
      <div  id="memory_board">
        <h1>Settings</h1>
        <div>Themes ---
        <input 
          type="radio" 
          name="theme" 
          value="heroes" 
          id="heroes" 
          checked={theme === "heroes"}
          />
        <label htmlFor="heroes">Heroes</label>

        <input 
          type="radio" 
          name="theme" 
          value="abc" 
          id="abc" 
          checked={theme === "abc"}
          />
        <label htmlFor="abc">ABC</label>
        </div>
        <hr />
        <div>Difficulty ---
        <input 
          type="radio" 
          name="difficulty" 
          value="easy" 
          id="easy" 
          className="radioButton"
          checked={difficulty === "easy"}
          onChange={onOptionChange}
          />
        <label htmlFor="easy">Easy</label>
        <input 
          type="radio" 
          name="difficulty" 
          value="medium" 
          id="medium" 
          className="radioButton"
          checked={difficulty === "medium"}
          onChange={onOptionChange}
          />
        <label htmlFor="medium">Medium</label>
        <input 
            type="radio" 
            name="difficulty" 
            value="hard" 
            id="hard"
            className="radioButton"
            checked={difficulty === "hard"} 
            onChange={onOptionChange}/>
        <label htmlFor="hard">Hard</label>
        </div>
        <hr />
        <button className="btn btn-primary" type="submit" onClick={onSaveSettings}>Save & play</button>
      </div>

    </>
  )
}
