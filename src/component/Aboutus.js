import React from 'react'
import about from '../images/about.jpg';
const Aboutus = () => {
    return (
        <div className='About container'>
            <h1 className='text-center m-2' >Sobre Nós</h1>
            <div className='row' >
                <div className='col-12 col-md-5 about-left'  >
                <p>Deixe a burocracia com a gente! Disponibilizamos suporte
                 e apoio administrativo para você focar no que realmente importa:
                  os seus clientes.</p>
                 <button type="button" className="btn  ">Comece aqui</button>
                </div>
                <div className='col-12 col-md-7 about-right' data-aos="fade-left"  >
                    <img src= {about} className='img-fluid' alt='about img' />
                </div>
            </div>
        </div>
    )
}

export default Aboutus
