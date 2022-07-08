import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import './BackButton.scss'
function BackButton() {
    const navigate = useNavigate()
  return (
    <button className='backButton' onClick={() => navigate('/')}>
         <MdOutlineKeyboardBackspace size={25}/>
         Back
    </button>
  )
}

export default BackButton