import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase'
import { GlobalContext } from '../context/ContextProvider';
import ReactToPdf from 'react-to-pdf'
import ReactToPrint from 'react-to-print';
import numWords from 'num-words'

export default function ReciptPrintModal(props) {
    const { data } = props
    const cancelRef = React.useRef(null);
    const [loading, setLoading] = useState(false)
    const {notify, currentUserData} = useContext(GlobalContext)
    console.log("🚁 ~ file: ReciptPrintModal.js ~ line 12 ~ ReciptPrintModal ~ currentUserData", currentUserData)
    const handleCreate = () => {

    }
    const options = {
        unit: 'in',
    }
    const slipRef = React.createRef();
    const signatureDateSplited = (data?.signatureDate).split("-")
    return (
        <div className="modal fade" id="ReciptPrintModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Recipt</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className='print-reciept-main-container'>
                                <div ref={slipRef} className='print-reciept-container'>
                                    <div className='reciept-top-container'>
                                        <div className='reciept-top-left-container'>
                                            <img
                                                src={ data?.currentUserData?.logo || require('../images/logo.jpeg')}
                                                className='reciept-top-left-logo'
                                                alt='logo'
                                            />
                                        </div>
                                        <div className='reciept-top-center-container'>
                                            <p className='reciept-top-center-info'>{currentUserData?.name} {currentUserData?.lastName}</p>
                                            <p className='reciept-top-center-info'>Psicólogo(a) | CRP {currentUserData?.crp} | CRF {currentUserData?.cpf}</p>
                                            <p className='reciept-top-center-info'>{currentUserData?.email} | {currentUserData?.phoneNo}</p>
                                            <p className='reciept-top-center-info'>{currentUserData?.houseNo} {currentUserData?.address}</p>
                                        </div>
                                        <div className='reciept-top-right-container'>
                                            <p className='reciept-amount-heading'>RECIBO</p>
                                            <div className='reciept-amount-container'>
                                                <p className='reciept-amount-para'>
                                                    Rs {data?.recieptAmount || 0}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reciept-middle-container'>
                                        <p>Recebi de {data?.patient?.name} a quantia de {(numWords(data?.recieptAmount || 0)).toUpperCase()} referente a {data?.sessionQty} sessão(ões) de psicoterapia no(s) dia(s) {
                                            (data?.sessionArray || []).map((item, index) => {
                                                return (
                                                    <span key={index}>{new Date(item).toLocaleDateString()} {index === (data?.sessionArray || []).length - 1 ? '' : ', '}</span>
                                                )
                                            })
                                        }.</p>
                                    </div>
                                    <div className='reciept-bottom-container'>
                                        <p className='reciept-location-info-para'>
                                            {currentUserData?.city}, {signatureDateSplited[2]} de {signatureDateSplited[1]} de {signatureDateSplited[0]}
                                        </p>
                                        <div
                                            className='reciept-signature-box'>

                                        </div>
                                        <p className='reciept-signature-info-para'>Assinatura (Signature)</p>
                                    </div>
                                </div>
                                <div className='print-actions-buttons'>
                                    <ReactToPrint
                                        trigger={() => {
                                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                                            // to the root node of the returned component as it will be overwritten.
                                            return <button className="btn btn-primary">Print</button>;
                                        }}
                                        content={() => slipRef.current}
                                    />

                                    <ReactToPdf targetRef={slipRef} x={0.2} y={0.2} scale={0.6} options={options} filename="div-blue.pdf">
                                        {({ toPdf }) => (
                                            <button onClick={toPdf} className="btn btn-secondary">Download PDF</button>
                                        )}
                                    </ReactToPdf>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button ref={cancelRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button disabled={loading} onClick={handleCreate} type="button" className="btn btn-primary">
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
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
