// import React, { useState } from 'react'
// import {  Link, useNavigate } from 'react-router'
// import students from "../data/students.json"
// import "../App.css";

// function Cratestudents() {
//   const [name,setName]= useState("");
//   const [email,setEmail]= useState("");
//   const [age,setAge]= useState("");
//   const navigate = useNavigate();
 
//   const [errors,setErrors]=useState({});

//  const handleSubmit = (e) => {
//   e.preventDefault();

//   let newErrors = {};

//   const nameRegex = /^[A-Za-z ]+$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const ageRegex = /^[0-9]+$/;

//   if (!name) {
//     newErrors.name = "Name is required";
//   } else if (!nameRegex.test(name)) {
//     newErrors.name = "Name must contain only letters";
//   }

//   if (!email) {
//     newErrors.email = "Email is required";
//   } else if (!emailRegex.test(email)) {
//     newErrors.email = "Invalid email format";
//   }

  
//   if (!age) {
//     newErrors.age = "Age is required";
//   } else if (!ageRegex.test(age)) {
//     newErrors.age = "Age must be a number";
//   }

//   setErrors(newErrors);


//   if (Object.keys(newErrors).length > 0) {
//     return;
//   }
//   students.push({
//     name,
//     email,
//     age
//   });

//   alert("Student Added Successfully");

//   navigate("/");
// };
//   return (
    
//     <div className='container'>
//       <h2>Add new student</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label><br />
//         <input type="text" 
//         id='name' name='name' 
//         value={name}
//         onChange={e=>setName(e.target.value)}/><br />
//         <span className='error'>{errors.name}</span><br />

//         <label htmlFor="email">Email:</label><br />
//         <input type="email" 
//         id='email' name='email' 
//         value={email}
//         onChange={e=>setEmail(e.target.value)}/><br />
//         <span className='error'>{errors.email}</span><br />

//         <label htmlFor="age">Age:</label><br />
//         <input type="number" 
//         id='age' name='age' 
//         value={age}
//         onChange={e=>setAge(e.target.value)}/><br />
//         <span className='error' >{errors.age}</span><br />

//         <div className='btn'>
//           <button className='save-btn' type='submit'>Save</button>
//           <Link to="/" className='back-btn'>Back</Link>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Cratestudents

port React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router'
import students from "../data/students.json"
import "../App.css";

function Cratestudents() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [age,setAge]= useState("");
  const navigate = useNavigate();
 
  const [errors,setErrors]=useState({});

//  const handleSubmit = (e) => {
//   e.preventDefault();

//   let newErrors = {};

//   const nameRegex = /^[A-Za-z ]+$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const ageRegex = /^[0-9]+$/;

//   if (!name) {
//     newErrors.name = "Name is required";
//   } else if (!nameRegex.test(name)) {
//     newErrors.name = "Name must contain only letters";
//   }

//   if (!email) {
//     newErrors.email = "Email is required";
//   } else if (!emailRegex.test(email)) {
//     newErrors.email = "Invalid email format";
//   }

  
//   if (!age) {
//     newErrors.age = "Age is required";
//   } else if (!ageRegex.test(age)) {
//     newErrors.age = "Age must be a number";
//   }

//   setErrors(newErrors);


//   if (Object.keys(newErrors).length > 0) {
//     return;
//   }
  students.push({
    name,
    email,
    age
  });

  alert("Student Added Successfully");

  navigate("/");
};
  return (
    
    <div className='container'>
      <h2>Add new student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" 
        id='name' name='name' 
        // value={name}
        onChange={e=>setName(e.target.value)}/><br />
        <span className='error'>{errors.name}</span><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" 
        id='email' name='email' 
        // value={email}
        onChange={e=>setEmail(e.target.value)}/><br />
        <span className='error'>{errors.email}</span><br />

        <label htmlFor="age">Age:</label><br />
        <input type="number" 
        id='age' name='age' 
        // value={age}
        onChange={e=>setAge(e.target.value)}/><br />
        <span className='error' >{errors.age}</span><br />

        <div className='btn'>
          <button className='save-btn' type='submit'>Save</button>
          <Link to="/" className='back-btn'>Back</Link>
        </div>
      </form>
    </div>
  )
}

export default Cratestudents