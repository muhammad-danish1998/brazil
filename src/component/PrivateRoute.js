// Auth Route with firebase
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useStateValue } from '../context/ContextProvider';
import SideBar from './Layout/SideBar';

function AuthRoute({ children, ...rest }) {
    const { currentUser } = useStateValue();
    
        //we are on a protected route
        if (!currentUser) {
            //take them to sign in page
            return <Redirect to="/login" />
        }
    return (
        <>
            <SideBar>
            <Route {...rest}>{children}</Route>
            </SideBar>
        </>
    )
}
export default withRouter(AuthRoute);