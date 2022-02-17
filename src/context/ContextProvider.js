import React, { useReducer, createContext, useContext, useEffect } from 'react';
import reducer, { initialState } from './Reducer'
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        // useEffect with firebase auth to get current user
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                dispatch({ type: 'SET_CURRENT_USER', payload: null });
                
            } else {
                dispatch({ type: 'SET_CURRENT_USER', payload: user });
                getCurrnetUserData(user.uid);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const getCurrnetUserData = (uid) => {
        firebase.firestore().collection('users').doc(uid).get().then(doc => {
            if (doc.exists) {
                dispatch({ type: 'SET_USER_DATA', payload: doc.data() });
            } else {
                dispatch({ type: 'SET_USER_DATA', payload: null });
            }
        });
    }

    const notify = (message, type) => {
        return toast(message, {
            type: type,
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            progress: undefined,
        });
    }

    return (
        <GlobalContext.Provider value={{
            notify,
            dispatch,
            currentUser: state.currentUser,
            currentUserData: state.currentUserData,
        }}>
            {
                state.currentUserLoading ?
                    (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                            </div>
                        </div>
                    ) :
                    children
            }
        </GlobalContext.Provider>
    )
}
export default withRouter(ContextProvider);
export const useStateValue = () => useContext(GlobalContext);