import React from 'react'
import Form from './Form'
import './checker.css'

const Checker= () => {

  return (
    <section className="checker section" id="checker">
         <h1 className='section__title'>Benefits Eligibility Checker</h1>

        <div className="checker__container container grid">
        <Form />
        </div>

    </section>
  )
}

export default Checker