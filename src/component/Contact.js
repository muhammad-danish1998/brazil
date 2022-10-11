import React, { useState } from 'react'

const Contact = () => {
    let [data , setData] = useState({
        name : '',
        phone : '',
        email: '',
        msg : ''
    })
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is : ${data.name}.
        My Contact Number is : ${data.phone}.
         My Email Address ${data.email}. 
        My Message is : ${data.msg}`)
    } 
    const inputEvent = (e) =>{
        const {name , value} = e.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value,
            }
        });
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Fale Conosco</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Name"
                                    name='name'
                                    value={ data.name}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Celular</label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Mobile Number"
                                    name='phone'
                                    value={ data.phone }
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Endereço de e-mail</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    name='email'
                                    value={ data.email }
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name='msg'
                                    value={ data.msg }
                                    onChange={inputEvent}>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" style={{ fontWeight: 'bold' }}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
