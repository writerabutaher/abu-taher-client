import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter';
import profile from '../../Assets/profile.png';

function Hero() {
    return (
        <>
            <div className='md:flex md:flex-row-reverse justify-between items-center gap-4 md:mt-20 mt-10'>
                <div className='flex justify-center'>
                    <img className='w-[30rem]' src={profile} alt="" />
                </div>
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <h3 className='md:text-4xl text-2xl font-semibold tracking-widest text-gray-600'>Hello I'm</h3>
                    <h1 className='md:text-7xl text-4xl font-semibold tracking-wider text-pink-600'>
                        <Typewriter
                            cursor
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={75}
                            words={[
                                'Abu Taher'
                            ]}
                        />
                    </h1>
                    <p className='text-gray-600 text-sm md:text-base'>I’m Abu Taher. I’m in class 12. Recently I finished my web development course in Programming Hero. I learned all my skills very discipline way. I have done some projects which were given to me by Programming Hero. I build those projects with MERN.</p>
                    <a href=''>
                        <Link to='/contact'
                            class="inline-block rounded-full border border-pink-600 bg-pink-600 px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500">
                            Contact
                        </Link>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero