import React from 'react'

function Contact() {
    return (
        <>
            <div id='contact' className="md:my-32 my-20">
                <div className='md:pb-10 pb-6'>
                    <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-indigo-600 before:bottom-1'><span className='relative'>GET IN TOUCH</span></span></h1>
                </div>
                <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                    <div>
                        <label htmlFor="name" className="inline-block text-gray-600 text-sm sm:text-base mb-2">Name</label>
                        <input type='text' name="name" className="w-full bg-gray-50 text-gray-600 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="inline-block text-gray-600 text-sm sm:text-base mb-2">Email</label>
                        <input type='email' name="email" className="w-full bg-gray-50 text-gray-600 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2" required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="inline-block text-gray-600 text-sm sm:text-base mb-2">Message</label>
                        <textarea name="message" className="w-full h-48 bg-gray-50 text-gray-600 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2" required></textarea>
                    </div>

                    <div className="sm:col-span-2 flex justify-between items-center">
                        <button className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact