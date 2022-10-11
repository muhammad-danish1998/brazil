import React from 'react'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Header from './Header'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Services from './Services'
import Footer from './Footer'



const Home = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <Header />
            <Aboutus />
            <Services />
            {/* <Pricing /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
