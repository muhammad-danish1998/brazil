import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Navbar = () => {
    return (
        <div className='container navbar_container'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src={logo} className='img-fluid logo-img' alt='logo' width={70}   />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Início</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Sobre Nós</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Serviços</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/price">Planos</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Fale Conosco</NavLink>
                            </li>
                            <li className="nav-item btn-navbar">
                            <NavLink className="nav-link" to="/register">Inscrever-se</NavLink>
                            </li>
                            <li className="nav-item btn-navbar">
                            <NavLink className="nav-link" to="/login">Entrar</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
