import React from 'react'

function Footer() {
    return (
        <div className='bg-pink-200 px-4'>
            <div className='py-8 md:flex justify-between items-center max-w-screen-xl mx-auto'>
                <div className='flex items-center justify-center gap-2 pb-4'>
                    <img className='w-12' src="https://img.icons8.com/color/512/violet-flower.png" alt="logo" />
                    <h1 className='text-violet-800 text-2xl'>Abu Taher</h1>
                </div>
                <p className='text-gray-600 text-xl text-center'>Copyright © 2023. All rights are reserved.</p>
            </div>
        </div>
    )
}

export default Footer