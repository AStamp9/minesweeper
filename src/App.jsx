import { useState, useEffect } from 'react'
import './App.css'

function App() {
 const [board, setBoard] = useState([]);


useEffect(function (){

  const newBoard = Array.from({length: 100}, function (_, index) {
   return index;
  }) 
 
  setBoard(newBoard)
}, [])

  return (
    <>
      <div className='board'>
        {board.map( index => (
        <div key = {index} className="cell" > </div>
        )

        )}
      </div>
    </>
  )
}

export default App
