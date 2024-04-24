import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
      navigate('/');
    };
  return (
    <div className="error__content">
    <h3 className="error__title">I'm sorry, you are not elegible.</h3>
    <div className="error__info">
        <p>You must be over 18 to qualify</p>
        <button className="button button-flex" onClick={redirectToHome}>Go To Homepage</button>
    </div>
</div>
  )
}

export default Error