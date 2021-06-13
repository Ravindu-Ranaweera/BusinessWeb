

function Navbar() {
    return (
        <nav  className='container mx-auto relative z-10 px-20'>
        <div className="">
          <img className='float-left px-5 my-5' src={'./img/logo.png'} alt="" />
        </div>
        <ul className='float-right'>
          <li className='inline-block px-5 my-5'><a className='block font-bold tracking-wide text-white' href="">Home</a></li>
          <li className='inline-block px-5 my-5'><a className='block  font-bold tracking-wide text-white' href="">About</a></li>
          <li className='inline-block px-5 my-5'><a className='block  font-bold tracking-wide text-white' href="">Recruitmets</a></li>
          <li className='inline-block px-5 my-5'><a className='block  font-bold tracking-wide text-white' href="">contact</a></li>
         
        </ul>
      </nav>
    )
}

export default Navbar
