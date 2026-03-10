import React, { useState } from 'react'
import studentsData from "../data/students.json"
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import * as XLSX from "xlsx";
import "./studenttable.css"

function Studenttable() {

  const navigate = useNavigate();
  const [students, setStudents] = useState(studentsData);

  const DisplayDetails = (student) => {
    navigate(`/student/view/${student.name}`, { state: student });
  };

  const Editstudent = (student) => {
    navigate(`/student/edit/${student.name}`, { state: student });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
  };

  return (
    <div className='container'>

      <div className=''>
        <h2>Student Records</h2>
        <Link to="/student/create" className='addingStudent' >Add new student</Link>
      </div>

      <div className="table-containers">
        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>

                <td>
                  <button onClick={() => Editstudent(student)} className='edit-btn'>
                    Edit
                  </button>

                  <button onClick={() => DisplayDetails(student)} className='edit-btn'>
                    View
                  </button>

                  <button
                    className='edit-btn'
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className='download'>
          <button
        className="btn btn-success mb-3"
        onClick={downloadExcel}
      >
        Download Excel
      </button>
        </div>

      </div>

    </div>
  );
}

export default Studenttable;