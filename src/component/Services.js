import React from 'react'
import about from '../images/service.jpg';
const Services = () => {
    return (
        <div className='About container'>
            <h1 className='text-center  hading'>Serviços</h1>
            <div className='row'>
                <div className='col-12 col-md-6 service-right' data-aos="fade-right">
                    <img src= {about} className='img-fluid' alt='about img' />
                </div>
                <div className='col-12 col-md-6 service-left'>
                <h5>Funcionalidades atuais</h5>
                <ul>
                    <li>- Cadastro de pacientes</li>
                    <li>- Gerador de recibos</li>
                </ul>
                <h5>Funcionalidades  desenvolvimento</h5>
                <ul>
                <li>- Agenda (integrada aos recibos)</li> 
                <li>- Envio do recibo por e-mail</li>
                <li>- Emissão de NFs-e</li>
                <li>- Carnê-Leão</li>
                <li>- Abertura de CNPJ</li>
                <li>- Obrigações Acessórias</li>
                </ul>
                 <button type="button" className="btn  ">Veja aqui</button>
                </div>
            </div>
        </div>
    )
}

export default Services
