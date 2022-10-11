import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase';
import logo from '../../images/logo.jpeg'
import { GlobalContext } from '../../context/ContextProvider';
import avatar from '../../images/avatar.jpg'

export default function SideBar({children}) {
    const {notify, currentUserData} = useContext(GlobalContext)
    console.log("🚁 ~ file: SideBar.js ~ line 10 ~ SideBar ~ currentUserData", currentUserData)
    const handleLogout = () => {
        firebase.auth().signOut().then().catch((err)=>{
            if(err.message){
                notify(err.message,"error")
            }
        });
    }
  return (
    <div className="container-fluid sidebar_container">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to={"/dashboard"} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white navbar-brand text-decoration-none">
                        <img src={logo} className='img-fluid logo-img' alt='logo' width={70}   />
                    </NavLink>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li  className="nav-item ">
                        {/* <NavLink to={"/dashboard"}  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                             </NavLink> */}
                    </li>
                    <li className="nav-item ">
                        <NavLink to={"/patients"} className="nav-link align-middle px-0">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Pacientes</span>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={currentUserData?.logo || avatar} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">{currentUserData?.name}{" "}{currentUserData?.lastName}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li onClick={()=> handleLogout()} ><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
            {children}
        </div>
    </div>
</div>
  )
}
