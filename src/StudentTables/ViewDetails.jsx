import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";

function ViewDetails() {

  const location = useLocation();
  const student = location.state;

  return (
    <div className="container">

      <h2>Student Details</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Age:</b> {student.age}</p>

      <Link to="/" className="back-btn">Back</Link>

    </div>
  );
}

export default ViewDetails;