import { useNavigate } from 'react-router-dom';

function useFormSubmission() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const day = formData.get('day');
    const month = formData.get('month');
    const year = formData.get('year');

    const dobFeedback = document.getElementById('dob-Feedback');
    dobFeedback.textContent = ''; 

    let hasInputErrors = false; 

    if (day && month && year) {
        dobFeedback.textContent = 'Invalid day. Please enter your date of birth again.';
      if (day.length > 2 || isNaN(parseInt(day)) || parseInt(day) < 1 || parseInt(day) > 31) {
          hasInputErrors = true;
      }
  
      
      if (month.length > 2 || isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12) {
        dobFeedback.textContent = 'Invalid month. Please enter your date of birth again.';  
        hasInputErrors = true;
      }
  
      
      if (year.length !== 4 || isNaN(parseInt(year)) || parseInt(year) > new Date().getFullYear()) {
        dobFeedback.textContent = 'Invalid year. Please enter your date of birth again.';  
        hasInputErrors = true;
      }

      if (hasInputErrors) { 
        //   console.log("Input format errors found, resetting form"); 
          event.target.reset();
      } else {
          const dob = new Date(`${year}-${month}-${day}`); 
          const currentDate = new Date();

          let age = currentDate.getFullYear() - dob.getFullYear();
          const monthDiff = currentDate.getMonth() - dob.getMonth(); 
          if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
              age--; 
          }

          console.log("Date of Birth:", dob);
          console.log("Current Date:", currentDate);
          console.log("Age:", age);

          if (age >= 18) {
              console.log("Navigating to success");
              navigate('/success'); 
          } else {  
              console.log("Navigating to error (underage)"); 
              navigate('/error');
          }
      }
    }
  };

  return handleSubmit; 
}

export default useFormSubmission;
