import React, { useState } from 'react'
import priceApi from './pricingApi'

const Pricing = () => {
    let [apis, setApi] = useState(priceApi);
    return (

        <div className='pricing container'>
            <h1 className='text-center ' style={{marginBottom:'30px'}}>Planos</h1>
            <div className='row'>
                {
                    apis.map((val, ind) => {
                        return (
                            <>
                                <div className='col-12 col-md-3 price-plane' data-aos="fade-up">
                                    <h4 className='pricing-name'>{val.name}</h4>
                                    <h1>$ {val.amount} /mo</h1>
                                    <p>Upto 50 keyphrases optimized</p>
                                    <p>Information architecture</p>
                                    <p>Information architecture</p>
                                    <button>Purchase Now</button>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing
