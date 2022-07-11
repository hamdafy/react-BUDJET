import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md'

const ExItem = ({ expense ,handledelet, handledit }) => {

const  {id, charge, amount } = expense;
  return (
    <li className='item'>
        <div className='info'>
       <span className='expense' >{charge}</span>
       <span   className='amount'>${amount} </span>

  </div>
  <div>

    <button className='edit-btn' aria-label='edit button' onClick={() =>handledit(id)}>

        <MdEdit/>
    </button>

    
    <button className='clear-btn' aria-label='delete button'  onClick ={() =>handledelet(id)}>

        <MdDelete/>
    </button>
  </div>
 
    </li>
  )
}

export default ExItem
