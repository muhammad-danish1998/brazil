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
        const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
            if (!user) {
                dispatch({ type: 'SET_CURRENT_USER', payload: null });

            } else {
                const fetchUser = await fetchUserData(user);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const fetchUserData = async (user) => {
        const userData = await getCurrnetUserData(user.uid);
        dispatch({ type: 'SET_CURRENT_USER', payload: user });
        dispatch({ type: 'SET_USER_DATA', payload: userData });
    }

    const getCurrnetUserData = async (uid) => {
        const data = firebase.firestore().collection('users').doc(uid).get().then(doc => {
            if (doc.exists) {
                return doc.data()
            } else {
                return null
            }
        });
        return data
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
            fetchUserData,
        }}>
            {
                state.currentUserLoading ?
                    (
                        <div className="d-flex justify-content-center loading-container">
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