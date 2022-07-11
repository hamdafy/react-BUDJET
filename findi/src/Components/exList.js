import React from 'react'
import ExItem from './exItem'
import {MdDelete} from 'react-icons/md'

const ExList = ({expenses ,handledelet,handledit,clearitem }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) =>{
         
    return <ExItem key={expense.id}  expense={expense}   handledelet={handledelet}  handledit={handledit}/>;

        })}

      </ul>
      {expenses.length > 0 && <button className='btn' onClick={clearitem}  > clear
      <MdDelete  className='btn-icon'  />
      
      </button>}

    </>
  );
}

export default ExList
