import React, { useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=''>
      <nav className="bg-white/50  text-black p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Brand</a>
          <button
            className="md:hidden block text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdMenuOpen size={28} /> : <MdMenu size={28} />}
          </button>
          <ul className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent md:flex-row transition-all duration-300 ease-in-out ${isOpen ? "h-[200px]" : "h-[0px]"}`}>
            <li><a href="#" className={`block ${isOpen ? "" : "hidden"} transition-all duration-300 ease-in-out px-4 py-2 md:py-0 hover:text-gray-600`}>Home</a></li>
            <li><a href="#" className={`block ${isOpen ? "" : "hidden"} transition-all duration-300 ease-in-out px-4 py-2 md:py-0 hover:text-gray-600`}>About</a></li>
            <li><a href="#" className={`block ${isOpen ? "" : "hidden"} transition-all duration-300 ease-in-out px-4 py-2 md:py-0 hover:text-gray-600`}>Services</a></li>
            <li><a href="#" className={`block ${isOpen ? "" : "hidden"} transition-all duration-300 ease-in-out px-4 py-2 md:py-0 hover:text-gray-600`}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header