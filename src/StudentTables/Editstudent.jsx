import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import studentsData from "../data/students.json";

function Editstudent() {

  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state;

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [age, setAge] = useState(student.age);

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = studentsData.findIndex(
      (s) => s.email === student.email
    );

    if (index !== -1) {
      studentsData[index].name = name;
      studentsData[index].email = email;
      studentsData[index].age = age;
    }

    alert("Student Updated Successfully");

    navigate("/");
  };

  return (
    <div className="container">

      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label><br />
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
        /><br />

        <label>Email</label><br />
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /><br />

        <label>Age</label><br />
        <input
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        /><br /><br />

        <button type="submit">Update</button>

      </form>

    </div>
  );
}

export default Editstudent;