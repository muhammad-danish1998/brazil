import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider'
import { Stepper } from 'react-form-stepper';
import './Register.css'
const StepOne = ({ data, inputEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="nameFormItem" className="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    id="nameFormItem"
                    placeholder="Name"
                    name='name'
                    value={data.name}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastNameFormItem" className="form-label">Last Name</label>
                <input type="text"
                    className="form-control"
                    id="lastNameFormItem"
                    placeholder="Last Name"
                    name='lastName'
                    value={data.lastName}
                    onChange={inputEvent}
                />
            </div>
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
                <label htmlFor="phoneNoFormItem" className="form-label">Phone No</label>
                <input type="number"
                    className="form-control"
                    id="phoneNoFormItem"
                    placeholder="Phone No"
                    name='phoneNo'
                    value={data.phoneNo}
                    onChange={inputEvent}
                />
            </div>
        </div>
    )
}

const StepTwo = ({ data, inputEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="cpfFormItem" className="form-label">CPF</label>
                <input type="text"
                    className="form-control"
                    id="cpfFormItem"
                    placeholder="CPF"
                    name='cpf'
                    value={data.cpf}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="crpFormItem" className="form-label">CRP</label>
                <input type="text"
                    className="form-control"
                    id="crpFormItem"
                    placeholder="CRP"
                    name='crp'
                    value={data.crp}
                    onChange={inputEvent}
                />
            </div>
        </div>
    )
}

const StepThree = ({ data, inputEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="cepFormItem" className="form-label">CEP</label>
                <input type="text"
                    className="form-control"
                    id="cepFormItem"
                    placeholder="CEP"
                    name='cep'
                    value={data.cep}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="addressFormItem" className="form-label">Address</label>
                <textarea className="form-control"
                    id="addressFormItem"
                    rows="3"
                    name='address'
                    placeholder='Address'
                    value={data.address}
                    onChange={inputEvent}>
                </textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="complementoFormItem" className="form-label">Complemento</label>
                <input type="text"
                    className="form-control"
                    id="complementoFormItem"
                    placeholder="Complemento"
                    name='complemento'
                    value={data.complemento}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="bairroFormItem" className="form-label">Bairro</label>
                <input type="text"
                    className="form-control"
                    id="bairroFormItem"
                    placeholder="Bairro"
                    name='bairro'
                    value={data.bairro}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cidadeFormItem" className="form-label">Cidade</label>
                <input type="text"
                    className="form-control"
                    id="cidadeFormItem"
                    placeholder="Cidade"
                    name='cidade'
                    value={data.cidade}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="ufFormItem" className="form-label">UF</label>
                <input type="text"
                    className="form-control"
                    id="ufFormItem"
                    placeholder="UF"
                    name='uf'
                    value={data.uf}
                    onChange={inputEvent}
                />
            </div>
        </div>
    )
}

const StepFour = ({ data, inputEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="passwordFormItem" className="form-label">Password</label>
                <input type="password"
                    className="form-control"
                    id="passwordFormItem"
                    placeholder="Password"
                    name='password'
                    value={data.password}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="repasswordFormItem" className="form-label">Re Password</label>
                <input type="password"
                    className="form-control"
                    id="repasswordFormItem"
                    placeholder="Re Password"
                    name='repassword'
                    value={data.repassword}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="agreementPolicyFormItem" className="form-label">Agreement Policy</label>
                <a href='#'>Click here</a>
                {/* <input type="checkbox"
                ></input> */}
            </div>
        </div>
    )
}

const Register = () => {
    let [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNo: '',
        cpf: '',
        crp: '',
        cep: '',
        address: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        password: '',
        repassword: '',
    })
    let [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
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

    const nextStep = () => {
        if (activeStep === 3) {
            handleRegistration()
        } else {
            setActiveStep(activeStep + 1);
        }
    }



    const handleRegistration = () => {
        if (data.password !== data.repassword) {
            notify('Password and Re Password must be the same', 'error');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                const { password, ...rest } = data
                firebase.firestore().collection("users").doc(res.user.uid).set({
                    ...rest
                })
                    .then(() => {
                        setLoading(false);
                        notify('Successfully Created Your Account!', 'success');
                    }
                    )
                    .catch(err => {
                        console.log(err);
                        notify(err.message, 'error');
                        setLoading(false);
                    })
            })
            .catch(err => {
                console.log(err);
                if (err.message == "The email address is badly formatted." || err.message == "The email address is already in use by another account.") {
                    setActiveStep(0)
                }
                notify(err.message, 'error');
                setLoading(false);
            })
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Registre-se</h1>
            </div>
            <div className='container  register_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }]} activeStep={activeStep} />
                        <Steps step={activeStep} data={data} inputEvent={inputEvent} />
                        {
                            activeStep > 0 && (
                                <button disabled={loading} className='btn btn-blue btn-primary btn-block mt-4' onClick={() => setActiveStep((prevVal) => prevVal - 1)}>Prev</button>
                            )
                        }
                        <button style={{ marginLeft: "5px" }} disabled={loading} className='btn btn-blue btn-primary btn-block mt-4' onClick={() => nextStep()}>{activeStep == 3 ? "Register" : "Next"}</button>
                    </div>
                </div>

            </div>
        </>
    )
}


const Steps = (props) => {
    const { step } = props;
    switch (step) {
        case 0:
            return <StepOne {...props} />
        case 1:
            return <StepTwo {...props} />
        case 2:
            return <StepThree {...props} />
        case 3:
            return <StepFour {...props} />
        default:
            return <StepOne {...props} />

    }
}


export default Register
