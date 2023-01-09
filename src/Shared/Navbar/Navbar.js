import React from 'react'
import { Link } from 'react-router-dom'
import { FaStream } from "react-icons/fa";

function Navbar() {

    const navItems =
        <>
            <button>
                <Link to='/'
                    className="relative font-medium text-pink-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-pink-600 before:transition hover:before:scale-x-100">
                    Home
                </Link>
            </button>
            <button>
                <a href='#about'
                    className="relative font-medium text-pink-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-pink-600 before:transition hover:before:scale-x-100">
                    About
                </a>
            </button>
            <button>
                <a href='#skill'
                    className="relative font-medium text-pink-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-pink-600 before:transition hover:before:scale-x-100">
                    Skill
                </a>
            </button>
            <button>
                <a href='#testimonial'
                    className="relative font-medium text-pink-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-pink-600 before:transition hover:before:scale-x-100">
                    Testimonial
                </a>
            </button>
            <button>
                <a href='#contact'
                    className="inline-block rounded-full border border-pink-600 bg-pink-600 px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500">
                    Contact
                </a>
            </button>
        </>

    return (
        <>
            <nav className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-2'>
                    <img className='md:w-16 w-10' src="https://img.icons8.com/color/512/violet-flower.png" alt="logo" />
                    <h1 className='text-violet-800 md:text-4xl text-2xl'>Abu Taher</h1>
                </div>
                <div className='md:flex hidden items-center gap-8 text-2xl'>
                    {navItems}
                </div>
                <FaStream className='text-pink-600 md:hidden' size={'2rem'} />
            </nav>
        </>
    )
}

export default Navbar