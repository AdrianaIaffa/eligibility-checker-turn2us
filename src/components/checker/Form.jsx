import React from 'react';
import useFormSubmission from './useFormSubmission'; 

const Form = () => {
  const handleSubmit = useFormSubmission();

  return (
    <div className="form__content">
      <h3 className="form__title">We need to check if you are eligible</h3>
      <div className="form__group"> 
        <form className="form-container" id="eligibilityForm" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Enter your date of birth</legend>
            <div className="dob-inputs">
              <div id="dob-Feedback" className="feedback-area" role="alert" aria-live="assertive"></div>
              <label htmlFor="day-input">Day (DD):</label> 
              <input type="number" id="day-input" name="day" aria-describedby="day-feedback" placeholder="DD" maxLength="2" />
              <label htmlFor="month-input">Month (MM):</label>
              <input type="number" id="month-input" name="month" aria-describedby="month-feedback" placeholder="MM" maxLength="2" />
              <label htmlFor="year-input">Year (YYYY):</label>
              <input type="number" id="year-input" name="year" aria-describedby="year-feedback" placeholder="YYYY" maxLength="4" />
            </div>
          </fieldset>
          <button className="button button-flex" type="submit" id="submit-button">Check Eligibility</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
