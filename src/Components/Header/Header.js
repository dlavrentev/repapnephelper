import React from 'react'
import '../../Styles/Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-links'>Login</div>
        <div className='header-links'>Abenteuer</div>
        <div className='header-links'>Kampf</div>
        <div className='header-links'>Notizen</div>
        <div className='header-links'>Material</div>
        <div className='header-links'>Story</div>
    </div>
  )
}
