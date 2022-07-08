import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'
import './Header.scss'

function Header({ theme, setTheme }) {

    const clickHandle = () => {
        setTheme(!theme)
    }

  return (
    <header className='header'>
        <div className="container">
            <div className="header-logo">
               <Link to='/'>
                Where in the world?
               </Link> 
            </div>
            
            <button onClick={clickHandle} className='header-theme-btn'>
                  {theme ? <BsFillMoonFill size={18}/> : <BsFillSunFill size={18}/>}  
            </button>
        </div>
    </header>
  )
}

export default Header