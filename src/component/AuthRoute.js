
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useStateValue } from '../context/ContextProvider';

//
function AuthRoute({ children, ...rest }) {
    const { currentUser } = useStateValue();
        if (!currentUser) {
            //leave them on the sign in page
        } else {
            return <Redirect to="/dashboard" />
        }
    return <Route {...rest}>{children}</Route>
}
export default withRouter(AuthRoute);