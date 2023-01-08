import React from 'react'
import SkillBar from 'react-skillbars';
import { FaTags, FaShoppingBag } from "react-icons/fa";

function SkillEducation() {

    const skills = [
        { type: 'HTML', level: 90 },
        { type: 'CSS', level: 85 },
        { type: 'Bootstrap', level: 75 },
        { type: 'Tailwind CSS', level: 65 },
        { type: 'React JS', level: 60 },
        { type: 'MongoDB', level: 40 }
    ];
    const colors = {
        bar: "#e62b74",
        title: {
            text: "#ffff",
            background: "#563fdf"
        }
    };

    return (
        <div id='skill' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-indigo-600 before:bottom-1'><span className='relative'>SKILL & EDUCATION</span></span></h1>
            </div>
            <div className='md:flex justify-between gap-8'>
                <div className='md:w-1/2'>
                    <div className='flex items-center gap-4 py-8'>
                        <FaShoppingBag size={'2rem'} className='text-pink-600' />
                        <h1 className='text-4xl'>Skills</h1>
                        <div className='border-pink-600 border-2 w-1/4'></div>
                    </div>
                    <SkillBar skills={skills} colors={colors} />
                </div>
                <div className='md:w-1/2'>
                    <div className='flex items-center gap-4 py-8'>
                        <FaTags size={'2rem'} className='text-pink-600' />
                        <h1 className='text-4xl'>Education</h1>
                        <div className='border-pink-600 border-2 w-1/4'></div>
                    </div>
                    <div className='flex flex-col gap-8 text-2xl'>
                        <p>JDC in <span className='text-gray-600'>- Uttar Badda Islamia Kamil Madrasah <br />2018</span></p>
                        <p>Dakhil in <span className='text-gray-600'>- Uttar Badda Islamia Kamil Madrasah <br />2021</span></p>
                        <p>HSC in <span className='text-gray-600'>- Jatir Janak Bangbandhu Gov College <br />2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillEducation