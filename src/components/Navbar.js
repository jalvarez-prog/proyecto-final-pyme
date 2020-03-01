import React from 'react'
// import Social from '../components/Social'
export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark justify-content-end'>
      <a className='navbar-brand' href='#'>
        <span>Navbar</span>
      </a>
      <div className='ml-auto mr-3 order-lg-last'>
        <a href='#' className='ml-auto mr-3 order-lg-last'>
          Ingresa
        </a>
        <a href='#' className='ml-auto mr-3 order-lg-last'>
          Ayuda
        </a>
        <button className='btn btn-primary ml-auto mr-3 order-lg-last'>
          <span>Inscríbete</span>
        </button>
      </div>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/people'>
              Link
            </a>
          </li>
        <li className='nav-item'>
          <a className='nav-link' href='/planets'>
              Disabled
            </a>
          </li>
        </ul>
        </div>
        
      </div>
    </nav>
  )
}
