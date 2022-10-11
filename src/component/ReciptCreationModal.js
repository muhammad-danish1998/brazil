import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider';
import ReciptPrintModal from './ReciptPrintModal';

export default function ReciptCreationModal(props) {
    const { data } = props
    console.log("🚁 ~ file: ReciptCreationModal.js ~ line 7 ~ ReciptCreationModal ~ data", data.charges)
    const cancelRef = React.useRef(null);
    const openModalRef = React.useRef()
    const { notify } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false)
    const [sessionQty, setSessionQty] = useState(1)
    const [sessionArray, setSessionArray] = useState([""])
    const [recieptAmount, setRecieptAmount] = useState(0)
    const [signatureDate, setSignatureDate] = useState((new Date().toISOString()).split("T")[0]);
    const handleCreate = () => {
        let hasNull = false;
        if (sessionArray.length === 0) {
            return notify("Please select atleast one session", "error")
        }
        sessionArray.forEach((eachSessionDate) => {
            if (eachSessionDate === "") {
                hasNull = true;
            }
        })
        if (hasNull) {
            notify("Por favor preencher todos os campos do recibo.", "error")
        } else {
            openModalRef.current.click()
        }
    }

    useEffect(() => {
        const { data } = props;
        setRecieptAmount(data?.charges || 0)
    }, [data])

    useEffect(() => {
        var myModal = document.getElementById('ReciptCreationModal');
        if (myModal) {
            myModal.addEventListener('shown.bs.modal', () => {
                console.log("triggered")
            })
            myModal.addEventListener('hide.bs.modal', () => {
                onCancel()
            })
        }
        return () => {
            if (myModal) {
                myModal.removeEventListener('shown.bs.modal', () => {
                    console.log("test")
                })
                myModal.removeEventListener('hide.bs.modal', () => {
                    console.log("test")

                })
            }
        }
    }, [])
    const handleSelectChange = (e) => {
        const inputVal = Number(e.target.value);
        setSessionQty(inputVal)
        const newArray = Array(inputVal).fill("");
        setSessionArray(newArray)
        setRecieptAmount(inputVal * (data?.charges || 0))
    }

    const onCancel = () => {
        const { onCancel: propsOnCancel } = props;
        setSessionQty(0)
        setSessionArray([""])
        setRecieptAmount(0)
        setSignatureDate((new Date().toISOString()).split("T")[0])
        propsOnCancel()
    }

    const dateEvent = (e, dateIndex) => {
        const inputVal = e.target.value;
        setSessionArray((res) => {
            return res.map((item, index) => {
                return index === dateIndex ? inputVal : item
            })
        })
    }
    return (
        <div className="modal fade" id="ReciptCreationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Gerar Recibo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="PatientNameFormItem" className="form-label">Número de sessões</label>
                                    <select value={sessionQty} onChange={(e) => handleSelectChange(e)} className="form-select" aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                            {/* End Row */}

                            {/* New Row */}
                            {
                                sessionArray.map((item, index) => (
                                    <div key={index} className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="PatientNameFormItem" className="form-label">Sessão</label>
                                            &nbsp;
                                            {index + 1}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="date"
                                                className="form-control"
                                                placeholder="Date"
                                                name='sureName'
                                                value={item}
                                                onChange={(e) => dateEvent(e, index)}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                            {/* End Row */}
                            {/* New Row */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="PatientNameFormItem" className="form-label">Data do recibo</label>
                                    <input type="date"
                                        className="form-control"
                                        placeholder="Date"
                                        name='recuptDate'
                                        value={signatureDate}
                                        onChange={(e) => setSignatureDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="PatientNameFormItem" className="form-label">Valor do Recibo</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Valor"
                                        name='recieptAmount'
                                        value={recieptAmount}
                                        onChange={(e) => setRecieptAmount(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* End Row */}

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button ref={cancelRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <span ref={openModalRef} data-bs-toggle="modal" data-bs-target="#ReciptPrintModal"></span>
                        <button disabled={loading} onClick={handleCreate} type="button" className="btn btn-primary" >
                            {
                                loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm text-white mr-5" role="status" aria-hidden="true"></span>
                                        Creating...
                                    </>
                                ) : (
                                    'Create Reciept'
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
            <ReciptPrintModal
                data={
                    {
                        sessionQty,
                        sessionArray,
                        recieptAmount,
                        signatureDate,
                        patient: data,
                    }
                }
            />
        </div>
    )
}
