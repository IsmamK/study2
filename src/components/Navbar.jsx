import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className="navbar bg-black text-yellow-500  h-20 drop-shadow-gold  sticky top-0 z-20 mb-0">
  <div className="navbar-start">


    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>About Us</a></li>
        <li><a>Get in Touch</a></li>

      </ul>
    </div>
    <a href="#">
             <img src="csc.png " className='h-36 w-auto' />
             </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-bold">
      <li><a>Home</a></li>
      <li className=''>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>About Us</a></li>
      <li><a>Get In Touch</a></li>

    </ul>
  </div>
  <div className="navbar-end">

<a className='drop-shadow-gold'>
  <img src="bangla.png" className='w-14 h-14 md:w-20 md:h-20 '/>

  </a>
<a className='drop-shadow-gold'>
  <img src="english.png" className='w-8 h-8 md:w-12 md:h-12'/>
  </a>

  </div>
</div>
    
    </>
  )
}

export default Navbar
