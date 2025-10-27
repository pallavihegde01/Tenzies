import React from 'react'

const Die = ({num,isHeld,hold}) => {

  const bgColor = isHeld ? 'bg-green-500' : 'bg-white hover:bg-gray-200' ;
  return (
    <div>
        <button 
          className={`h-10 w-10 flex items-center justify-center shadow-md rounded-sm font-semibold text-lg transition sm:h-16 sm:w-16 cursor-pointer ${bgColor}`}
          onClick={hold}
        >
            {num}
        </button>
    </div>
  )
}

export default Die