import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider';

export default function PatientEditModal(props) {
    const { inputEvent, data, editMode } = props
    const cancelRef = React.useRef(null);
    const { notify } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false)
    const handleSave = () => {
        setLoading(true)
        if (editMode) {
            editPatient()
        } else {
            addPatient()
        }
    }

    const editPatient = () => {
        firebase.firestore().collection('patients').doc(data.docId).update({
            ...data,
            updatedAt: new Date(),
        }).then((doc) => {
            notify('Patient Updated Successfully!', 'success')
            cancelRef.current.click()
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            notify(error.message, 'error')
            setLoading(false)
        })
    }

    const addPatient = () => {
        firebase.firestore().collection('patients').add({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: firebase.auth().currentUser.uid,
        }).then((doc) => {
            doc.update({
                docId: doc.id
            }).then(() => {
                // getPatientsData()
                notify('Patient Added Successfully!', 'success')
                cancelRef.current.click()
                setLoading(false)
            }).catch((error) => {
                notify('Error on Adding Patient!', 'error')
                notify(error.message, 'error')
                setLoading(false)
            })
        }).catch((error) => {
            console.log(error)
            notify(error.message, 'error')
            setLoading(false)
        })
    }

    return (
        <div className="modal fade" id="patientEditModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{editMode ? "Edit" : "Add"} Patient</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="PatientNameFormItem" className="form-label">Nome</label>
                                    <input type="text"
                                        className="form-control"
                                        id="PatientNameFormItem"
                                        placeholder="Nome"
                                        name='name'
                                        value={data.name}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="sureNameFormItem" className="form-label">Sobrenome</label>
                                    <input type="text"
                                        className="form-control"
                                        id="sureNameFormItem"
                                        placeholder="Sobrenome"
                                        name='sureName'
                                        value={data.sureName}
                                        onChange={inputEvent}
                                    />
                                </div>
                            </div>
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="rgFormItem" className="form-label">RG</label>
                                    <input type="text"
                                        className="form-control"
                                        id="rgFormItem"
                                        placeholder="RG"
                                        name='rg'
                                        value={data.rg}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
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
                            </div>
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="celularFormItem" className="form-label">Celular</label>
                                    <input type="text"
                                        className="form-control"
                                        id="celularFormItem"
                                        placeholder="Celular"
                                        name='celular'
                                        value={data.celular}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="enderecoFormItem" className="form-label">Endereço</label>
                                    <input type="text"
                                        className="form-control"
                                        id="enderecoFormItem"
                                        placeholder="Endereço"
                                        name='endereco'
                                        value={data.endereco}
                                        onChange={inputEvent}
                                    />
                                </div>
                            </div>
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="emailFormItem" className="form-label">E-mail</label>
                                    <input type="text"
                                        className="form-control"
                                        id="emailFormItem"
                                        placeholder="E-mail"
                                        name='email'
                                        value={data.email}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="valordaConsultaFormItem" className="form-label">Valor da Consulta</label>
                                    <input type="text"
                                        className="form-control"
                                        id="valordaConsultaFormItem"
                                        placeholder="Valor da Consulta"
                                        name='valordaConsulta'
                                        value={data.valordaConsulta}
                                        onChange={inputEvent}
                                    />
                                </div>
                            </div>
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="planodesaudeFormItem" className="form-label">Plano de saúde</label>
                                    <input type="text"
                                        className="form-control"
                                        id="planodesaudeFormItem"
                                        placeholder="Plano de saúde"
                                        name='planodesaude'
                                        value={data.planodesaude}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="ocupationFormItem" className="form-label">Ocupation</label>
                                    <input type="text"
                                        className="form-control"
                                        id="ocupationFormItem"
                                        placeholder="Ocupation"
                                        name='ocupation'
                                        value={data.ocupation}
                                        onChange={inputEvent}
                                    />
                                </div>
                            </div>
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="chargesFormItem" className="form-label">Charges</label>
                                    <input type="text"
                                        className="form-control"
                                        id="chargesFormItem"
                                        placeholder="Charges"
                                        name='charges'
                                        value={data.charges}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="patientSinceFormItem" className="form-label">Patient Since</label>
                                    <input type="date"
                                        className="form-control"
                                        id="patientSinceFormItem"
                                        placeholder="Patient Since"
                                        name='patientSince'
                                        value={data.patientSince}
                                        onChange={inputEvent}
                                    />
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button ref={cancelRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={loading} onClick={handleSave} type="button" className="btn btn-primary">
                            {
                                loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm text-white mr-5" role="status" aria-hidden="true"></span>
                                        Saving...
                                    </>
                                ) : (
                                    'Save changes'
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
