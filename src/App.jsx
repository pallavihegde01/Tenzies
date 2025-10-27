import React, { useState } from 'react'
import Die from './components/Die'
import Confetti from 'react-confetti'
// import { useWindowSize } from 'react-use';

const App = () => {

  // const { width, height } = useWindowSize();

  const generateDiceNumbers = () => {
    return new Array(10).fill(0).map(() => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false
    }))
  }

  const [dice,setDice] = useState(()=>generateDiceNumbers());

  const handleClick = () =>{
    if(!gameWon){
      setDice(prev=>
        prev.map(die =>
          die.isHeld ? die : {...die, value : Math.floor(Math.random() * 6) + 1}
        )
      );
    }else{
      setDice(generateDiceNumbers());
    }
  }
  const hold = (id) =>{
    setDice(prev => 
      prev.map((die,ind) => 
        ind===id ? {...die,isHeld:!die.isHeld} : die
      )
    );
  }

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);

  const diceElements = dice.map((diceObj,ind)=> <Die key={ind} num={diceObj.value} isHeld={diceObj.isHeld} hold={()=>hold(ind)}/>);

  return (
    <div className='bg-slate-100 h-full rounded-md flex flex-col justify-evenly items-center text-center p-4'>
      {gameWon && <Confetti />}
      <h1 className='text-2xl sm:text-4xl font-semibold'>Tenzies</h1>
      <p className='sm:text-lg'>Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
      <div className='grid grid-cols-5 gap-2 sm:gap-4 '>
        {diceElements}
      </div>
      <button onClick={handleClick} className='bg-blue-950 text-white text-lg font-semibold p-3 px-5 rounded'>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </div>
  )
}

export default App