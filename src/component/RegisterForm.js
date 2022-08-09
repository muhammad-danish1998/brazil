import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider'
import { Stepper } from 'react-form-stepper';
import './Register.css'

const steps = [{ label: 'Passo 1' }, { label: 'Passo 2' }, { label: 'Passo 3' }, { label: 'Passo 4' }, { label: 'Passo 5' }];

const StepOne = ({ data, inputEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="nameFormItem" className="form-label">Nome</label>
                <input type="text"
                    className="form-control"
                    id="nameFormItem"
                    placeholder="Nome"
                    name='name'
                    required
                    value={data.name}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastNameFormItem" className="form-label">Sobrenome</label>
                <input type="text"
                    className="form-control"
                    id="lastNameFormItem"
                    placeholder="Sobrenome"
                    name='lastName'
                    value={data.lastName}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="emailFormItem" className="form-label">Endereço de e-mail</label>
                <input type="email"
                    className="form-control"
                    id="emailFormItem"
                    placeholder="Endereço de e-mail"
                    name='email'
                    value={data.email}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNoFormItem" className="form-label">Celular</label>
                <input type="number"
                    className="form-control"
                    id="phoneNoFormItem"
                    placeholder="Celular"
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
                <label htmlFor="addressFormItem" className="form-label">Endereço</label>
                <textarea className="form-control"
                    id="addressFormItem"
                    rows="3"
                    name='address'
                    placeholder='Endereço'
                    value={data.address}
                    onChange={inputEvent}>
                </textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="houseNoFormItem" className="form-label">Número</label>
                <input type="text"
                    className="form-control"
                    id="houseNoFormItem"
                    placeholder="Número"
                    name='houseNo'
                    value={data.houseNo}
                    onChange={inputEvent}
                />
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

const StepFour = ({ fileEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Escolha seu logo</label>
                <input onChange={fileEvent} className="form-control" type="file" name='logo' id="logo" />
            </div>
        </div>
    )
}

const StepFive = ({ data, inputEvent, checkboxEvent }) => {
    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="passwordFormItem" className="form-label">Senha</label>
                <input type="password"
                    className="form-control"
                    id="passwordFormItem"
                    placeholder="Senha"
                    name='password'
                    value={data.password}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="repasswordFormItem" className="form-label">Repetir Senha</label>
                <input type="password"
                    className="form-control"
                    id="repasswordFormItem"
                    placeholder="Repetir Senha"
                    name='repassword'
                    value={data.repassword}
                    onChange={inputEvent}
                />
            </div>
            <div className="mb-3">
                <input className="form-check-input aggrement-input" name="aggrement" onChange={checkboxEvent} type="checkbox" checked={data.aggrement} id="aggrement" />
                <label htmlFor="agreementPolicyFormItem" className="form-label">Aceito os termos de uso</label>
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
        logo: null,
        aggrement: false,
        houseNo: '',
    })
    let [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const { notify, fetchUserData } = useContext(GlobalContext);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    }

    const checkboxEvent = (e) => {
        const { name, checked } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: checked,
            }
        });
    }

    const fileEvent = (e) => {
        const { files } = e.target;
        const file = files[0];
        setData((preVal) => {
            return {
                ...preVal,
                logo: file,
            }
        });
    }

    const nextStep = () => {
        if (activeStep === steps.length - 1) {
            if (data.aggrement) {
                handleRegistration()
            } else {
                notify('Você precisa aceitar os termos de uso.', 'error')
            }
        }
        else {
            setActiveStep(activeStep + 1);
        }
    }



    const handleRegistration = () => {
        if (data.password !== data.repassword) {
            notify('As senhas digitadas não coincidem', 'error');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                const { password, logo, ...rest } = data
                firebase.firestore().collection("users").doc(res.user.uid).set({
                    ...rest,
                })
                    .then(() => {
                        if (!logo) {
                            setLoading(false);
                            notify('Successfully Created Your Account!', 'success');
                            return null;
                        }
                        firebase.storage().ref(`/users/${res.user.uid}/${data.logo.name}`).put(data.logo).then((uploadSnap) => {
                            firebase.storage().ref(`/users/${res.user.uid}/${data.logo.name}`).getDownloadURL().then((url) => {
                                firebase.firestore().collection("users").doc(res.user.uid).update({
                                    logo: url
                                }).then(() => {
                                    if (fetchUserData) {
                                        fetchUserData(firebase.auth().currentUser)
                                    }
                                    setLoading(false);
                                    notify('Successfully Created Your Account!', 'success');
                                }).catch(err => {
                                    setLoading(false);
                                    notify(err.message, 'error');
                                    console.log("🚁 ~ file: RegisterForm.js ~ line 298 ~ firebase.firestore ~ err", err)
                                })
                            })
                        }).catch((error) => {
                            setLoading(false);
                            notify('Error Uploading Your Logo', error);
                        })
                    }
                    )
                    .catch(err => {
                        console.log("error in saving data", err);
                        notify(err.message, 'error');
                        setLoading(false);
                    })
            })
            .catch(err => {
                console.log(err);
                if (err.message == "Favor inserir endereço de e-mail em um formato válido" || err.message == "The email address is already in use by another account.") {
                    setActiveStep(0)
                }
                notify(err.message, 'error');
                setLoading(false);
            })
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Inscrever-se</h1>
            </div>
            <div className='container  register_div'>
                <div className='row'>
                    <div className='stepper-container col-md-6 col-10 mx-auto'>
                        <Stepper
                            steps={steps}
                            activeStep={activeStep}
                        />
                        <Steps step={activeStep} data={data} checkboxEvent={checkboxEvent} fileEvent={fileEvent} inputEvent={inputEvent} />
                        {
                            activeStep > 0 && (
                                <button disabled={loading} className='btn btn-blue btn-primary btn-block mt-4' onClick={() => setActiveStep((prevVal) => prevVal - 1)}>Voltar</button>
                            )
                        }
                        <button style={{ marginLeft: "5px" }} disabled={loading} className='btn btn-blue btn-primary btn-block mt-4' onClick={() => nextStep()}>{activeStep == (steps.length - 1) ? "Registrar" : "Avançar"}</button>
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
        case 4:
            return <StepFive {...props} />
        default:
            return <StepOne {...props} />

    }
}


export default Register
