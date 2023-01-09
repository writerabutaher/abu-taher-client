import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import SkillEducation from './SkillEducation'
import Testimonial from './Testimonial'

function Home() {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <SkillEducation></SkillEducation>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </>
    )
}

export default Home