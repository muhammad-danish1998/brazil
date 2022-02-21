import React, { useContext } from 'react'
import { GlobalContext } from '../context/ContextProvider'

function Patients() {
  const {currentUserData} = useContext(GlobalContext)
  return (
    <div>
      <div className='patients_container'>
      <h4 className='text-center' > All Patients </h4>
      <div className='patient-add-details'>
      <button className='btn btn-primary btn-sm mr-1'>Add Patients Details</button>
      </div>
      <div className='patient_list_container'>
      <table class="table table-striped table-hover">
      <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Charges</th>
      <th scope="col">Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      [
        {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        charges: '$100',
        date: '12/01/2022',
        },
        {
        id: 2,
        firstName: 'Julie',
        lastName: 'Doe',
        charges: '$100',
        date: '12/12/2022',
        },
    ].map((patient,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{patient?.firstName}</td>
        <td>{patient?.lastName}</td>
        <td>{patient?.charges}</td>
        <td>{patient?.date}</td>
        <td>
        <button className='btn btn-primary btn-sm mr-1'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
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