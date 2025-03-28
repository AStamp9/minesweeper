import { useState, useEffect } from 'react'
import './App.css'
import Cell from'./components/Cell.jsx'

function App() {
 const [board, setBoard] = useState([]);


useEffect(function (){

  const newBoard = Array.from({length: 100}, function (_, index) {
    return {
      id: index,
      wasClicked: false,
      isBomb: false,
      flagged: false,
      adjacentBombs: 0
    };
  }) 
 
  const totalBombs = 10;
  let bombsPlaced = 0;
  
  while (bombsPlaced < totalBombs) {
    const randomIndex = Math.floor(Math.random() * 100);
  
    if (newBoard[randomIndex].isBomb === false) {
      newBoard[randomIndex].isBomb = true;
      bombsPlaced++;
    }
  }
  
  setBoard(newBoard)
}, [])


function handleCellClick(id) {
  const updatedBoard = board.map(function (cell) {
    if (cell.id === id) {
      return { ...cell, wasClicked: true };
    } else {
      return cell;
    }
  });

  setBoard(updatedBoard);
}
  return (
    <>
      <div className='board'>
        {board.map( cell => (
          <Cell key={cell.id} cell={cell} onClick={handleCellClick}/>
        )

        )}
      </div>
    </>
  )
}

export default App
