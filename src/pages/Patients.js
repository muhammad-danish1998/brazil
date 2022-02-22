import React, { useContext, useEffect, useState } from 'react'
import PatientEditModal from '../component/PatientEditModal'
import firebase from 'firebase';
import { GlobalContext } from '../context/ContextProvider'

function Patients() {
  
  const {currentUserData} = useContext(GlobalContext);
  const [patients, setPatients] = useState([]);
  const [editMode,setEditMode] = useState(false)
  const initialEditData = {
    docId: "",
    name: "",
    sureName: "",
    rg: "",
    cpf: "",
    celular: "",
    endereco: "",
    email: "",
    valordaConsulta: "",
    planodesaude: "",
    ocupation: "",
    charges: "",
    patientSince: "",
  }
  const [editData,setEditData] = useState(initialEditData)

  const getPatientsData = () => {
    firebase.firestore().collection('patients').onSnapshot(snapshot => {
      let tempPatients = []
      snapshot.forEach(doc => {
        const docData = doc.data();
        tempPatients.push(docData);
      })
      setPatients(tempPatients)
    })
  }

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setEditData((preVal) => {
        return {
            ...preVal,
            [name]: value,
        }
    });
}

  useEffect(() => {
      getPatientsData()
    var myModal = document.getElementById('patientEditModal');
  if(myModal){
    myModal.addEventListener('shown.bs.modal',()=>{
      console.log("triggered")
    })
    myModal.addEventListener('hide.bs.modal',()=>{
      onCancel()
    })
  }
  
  return () => {
    if(myModal){
      myModal.removeEventListener('shown.bs.modal')
      myModal.removeEventListener('hide.bs.modal')
    }
  }
  }, []);

  const handleDelete = (docId) => {
    firebase.firestore().collection('patients').doc(docId).delete().then(() => {
      getPatientsData()
    })
  }
  const handleEdit = (row) => {
    setEditData(row);
    setEditMode(true);
  }

  const onCancel = ()=>{
    setEditMode(false);
    setEditData(initialEditData)
  }

  return (
    <div>
      <div className='patients_container'>
      <h4 className='text-center' > All Patients </h4>
      <div className='patient-add-details'>
      <button className='btn btn-primary btn-sm mr-1' data-bs-toggle="modal" data-bs-target="#patientEditModal" >Add Patients Details</button>
      </div>
      <PatientEditModal
       data={editData}
       inputEvent={inputEvent}
       editMode={editMode}
       />
      <div className='patient_list_container'>
      <table className="table table-striped table-hover">
      <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Charges</th>
      <th scope="col">E-mail</th>
      <th scope="col">Patient Since</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      (patients).map((patient,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{patient?.name}</td>
        <td>{patient?.sureName}</td>
        <td>{patient?.charges}</td>
        <td>{patient?.email}</td>
        <td>{patient?.patientSince}</td>
        <td>
        <button onClick={()=> handleEdit(patient)} data-bs-toggle="modal" data-bs-target="#patientEditModal" className='btn btn-primary btn-sm mr-1'>Edit</button>
        <button onClick={()=> handleDelete(patient?.docId)} className='btn btn-danger btn-sm'>Delete</button>
        <button className='btn btn btn-secondary btn-sm'>Print Reciept</button>
        </td>
    </tr>
      ))
    }
  </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default Patients