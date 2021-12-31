import React from 'react'
import "../App"

const StudentTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Enrollment</th>
        <th>CGPA</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.students.length > 0 ? (
        props.students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.enrollment}</td>
            <td>{student.cgpa}</td>
            <td>
              <button className="tablebutton"
                onClick={() => {
                  props.editRow(student)
                }}
              >
                Edit
              </button>
              <button className="tablebutton"
                onClick={() => props.deleteStudent(student.id)}                
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No Student</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default StudentTable