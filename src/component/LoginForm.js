import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider'

const Contact = () => {
    let [data, setData] = useState({
        email: '',
        password: ''
    })
    let [loading, setLoading] = useState(false);
    const { notify } = useContext(GlobalContext);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                notify(err.message, 'error');
                setLoading(false);
            })
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Login</h1>
            </div>
            <div className='container login_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="emailFormItem" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="emailFormItem"
                                    placeholder="name@example.com"
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordFormItem" className="form-label">Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="passwordFormItem"
                                    placeholder="name@example.com"
                                    name='password'
                                    value={data.password}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="text-center col-12">
                                <button className="btn btn-outline-primary" type="submit" style={{ fontWeight: 'bold' }}>
                                    {
                                        loading ? (
                                            <div className="spinner-border text-white" role="status">
                                            </div>
                                        ) : (
                                            'Login'
                                        )
                                    }</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
