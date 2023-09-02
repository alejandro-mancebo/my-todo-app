
import {useState } from 'react'

export default function TodoList() {

  const [myTodo, setMyTodo] = useState(["Buy groceries", "Clean the house", "Walk the dog"])
  const [item, setItem] = useState('')
  
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    if(item !== "") {
      setMyTodo([...myTodo, item])
    }

    setItem('')
  }
 
  return (
    <div className="cantainer">
      <h1>To-do list</h1>
        <div className="mb-2">Enter new item</div>
        <div className="input-group mb-3">

        <input aria-label="item"
          className="form-control"
          aria-describedby="click-button"
          type="text"
          id="item"
          name="item" value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <div className="input-group-append">
          <button className="btn btn-outline-primary"
            id="click-button"
            type="button"
            onClick={(e) => handleClick(e)} >Add
          </button>
        </div>

      </div>

      <div className="mb-2">Item List</div>
      <ul className="list-group">
        {myTodo.map((todo, index) => {
          return(
            <li className ="list-group-item" key={index}> {todo}</li>
          )
        })}
      </ul>
    </div>
  )
}
