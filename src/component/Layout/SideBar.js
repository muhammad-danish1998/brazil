import React, { useContext } from 'react'
import logo from '../../images/logo.jpeg'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase';
import { GlobalContext } from '../../context/ContextProvider';
import avatar from '../../images/avatar.jpg'

export default function SideBar({children}) {
    const {notify, currentUserData} = useContext(GlobalContext)
    const handleLogout = () => {
        firebase.auth().signOut().then().catch((err)=>{
            if(err.message){
                notify(err.message,"error")
            }
        });
    }
  return (
    <div class="container-fluid sidebar_container">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <NavLink className="navbar-brand" to="#">
                        <img src={logo} className='img-fluid logo-img' alt='logo' width={70}   />
                    </NavLink>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li  class="nav-item ">
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    </li>
                    <li class="nav-item ">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-person"></i> <span class="ms-1 d-none d-sm-inline">Patient</span>
                        </a>
                    </li>
                </ul>
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={avatar} alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">{currentUserData?.name}{" "}{currentUserData?.lastName}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li onClick={()=> handleLogout()} ><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            {children}
        </div>
    </div>
</div>
  )
}
