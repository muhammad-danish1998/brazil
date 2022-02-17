import React from 'react'
import Navbar from '../component/Navbar'
import RegisterForm from '../component/RegisterForm'
import Footer from '../component/Footer'

const Register = () => {
    return (
        <div>
            <Navbar />
            <RegisterForm />
            <div style={{marginTop:'80px'}}>
            <Footer />
            </div> 
        </div>
    )
}

export default Register
