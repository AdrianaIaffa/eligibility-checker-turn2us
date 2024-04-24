import React from 'react'
import Form from './Form';
import { Routes, Route, useLocation } from 'react-router-dom';
import Success from './Success';;
import './checker.css'

const Checker= () => {
  const location = useLocation();

  return (
    <section className="checker section" id="checker">
         <h2 className='section__title'>Benefits Eligibility Checker</h2>

        <div className="checker__container container grid">
        <Routes location={location}>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Form />} />
        </Routes>
        </div>

    </section>
  )
}

export default Checker