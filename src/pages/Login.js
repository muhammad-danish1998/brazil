import React from 'react'
import Navbar from '../component/Navbar'
import LoginForm from '../component/LoginForm'
import Footer from '../component/Footer'

const Login = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <div style={{marginTop:'80px'}}>
            <Footer />
            </div> 
        </div>
    )
}

export default Login
