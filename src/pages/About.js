import React from 'react'
import Aboutus from '../component/Aboutus'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
const About = () => {
    return (
        <div>
            <Navbar />
            <Aboutus />
            <div style={{marginTop:'230px'}}>
            <Footer />
            </div>
        </div>
    )
}

export default About
