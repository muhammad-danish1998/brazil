import React from 'react'
import Navbar from '../component/Navbar'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Contacts = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <div style={{marginTop:'80px'}}>
            <Footer />
            </div> 
        </div>
    )
}

export default Contacts
