import React from 'react'
import '../../../Styles/Fight.css'

export default function Fight() {
  return (
    <div className='fight-container'>
        <div className='fight-card-allied'>1</div>
        <div className='fight-arrows'>
          <img className='fight-arrow-left' alt='arrow-to-left'></img>
          <img className='fight-arrow-right' alt='arrow-to-right'></img>
        </div>  
        <div className='fight-card-enemy'>2</div>
    </div>
  )
}
