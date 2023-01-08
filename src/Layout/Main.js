import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

function Main() {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-4'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main