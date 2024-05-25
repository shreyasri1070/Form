import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    pan: '',
    aadhar: ''
  });


  const [errors, setErrors] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [show,setshow]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
        setSubmitDisabled(false)
      // No errors, navigate to success route
      navigate('/success', { state: { formData } });
     
    } else {
      setErrors(formErrors);
      setSubmitDisabled(true); 

      console.log(formErrors)

  }
};

  const validateForm = (data) => {
    const errors = {};
    // Basic validation, you can add more complex validation rules as needed
    if (!data.firstName.trim()) errors.firstName = 'First Name is required';
     if (!data.lastName.trim()) errors.lastName = 'Last Name is required';
     if (!data.username.trim()) errors.username = 'Username is required';
     if (!data.phone.trim()) errors.username = 'Phone No. is required';
     if (!data.aadhar.trim()) errors.username = 'Aadhar No. is required';
     if (!data.pan.trim()) errors.username = 'Pan No. is required';
   
    if (!data.email.trim()) errors.email = 'Email is required';
    // Add more validations for other fields here
    console.log(errors);
    // Enable/disable submit button based on form validity
    console.log(Object.keys(errors).length)
    //setSubmitDisabled(Object.keys(errors).length >0);
   

    return errors;
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>User Name:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </div>
       
        <div>
          <label>Email id:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        
        <div>
          <label>Phone No.:</label>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label>Aadhar No.:</label>
          <input type="number" name="aadhar" value={formData.aadhar} onChange={handleChange} />
          {errors.aadhar && <span className="error">{errors.aadhar}</span>}
        </div>
        <div>
          <label>Pan No.:</label>
          <input type="number" name="pan" value={formData.pan} onChange={handleChange} />
          {errors.pan && <span className="error">{errors.pan}</span>}
        </div>
        <div>
          <label >Password: </label>
        <input type={show ? 'text':'password'} name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}  />
        {errors.password && <span className="error">{errors.password}</span>}
        <button onClick={()=>setshow(!show)} >{show ? 'hide password':'show password'}</button>
        </div>
        <div>

        </div>
        
        <button type="submit" disabled={submitDisabled}>Submit</button>
      </form>
    </div>
  )
};


export default Form;