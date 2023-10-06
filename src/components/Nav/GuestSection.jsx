import React from 'react'
import './NavBar.css'

function GuestSection({valorAdult, valorChildren, actualizarValor}) {
  return (
    <div className='guest-options'>
            <div className='guest-container'>
              <h2 className='guests-1'>Adult</h2>
              <span className='btns-content-2'>Age 13 or above</span>
              <div className='num-guest'>
                <button className='btn-o' onClick={() => actualizarValor('adult', 'sumar')}>+</button>
                <span>{valorAdult}</span>
                <button className='btn-o m-lg-2' onClick={() => actualizarValor('adult', 'restar')}>-</button>
              </div>
            </div>
            <div className='guest-container'>
              <h2 className='guests-1'>Children</h2>
              <span className='btns-content-2'>Age 2 - 12</span>
              <div className='num-guest'>
                <button className='btn-o' onClick={() => actualizarValor('children', 'sumar')}>+</button>
                <span>{valorChildren}</span>
                <button className='btn-o m-lg-2' onClick={() => actualizarValor('children', 'restar')}>-</button>
              </div>
            </div>
          </div>
  )
}

export default GuestSection