import React from 'react'
import Form from './Form';
import { Routes, Route, useLocation } from 'react-router-dom';
import Success from './Success';
import Error from './Error';
import './checker.css'

const Checker= () => {
  const location = useLocation();

  return (
    <section className="checker section" id="checker">
         <h1 className='section__title'>Benefits Eligibility Checker</h1>

        <div className="checker__container container grid">
        <Routes location={location}>
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<Form />} />
        </Routes>
        </div>

    </section>
  )
}

export default Checker