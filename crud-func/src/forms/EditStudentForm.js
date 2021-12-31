import React, { useState, useEffect } from 'react'
import "../App"

const EditStudentForm = props => {
  const [ student, setStudent ] = useState(props.currentStudent)

  useEffect(
    () => {
      setStudent(props.currentStudent)
    },
    [ props ]
  )
  
  const handleInputChange = e => {
    const { name, value } = e.target

    setStudent({ ...student, [name]: value })
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.updateStudent(student.id, student)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={student.name} onChange={handleInputChange} />
      <label>Enrollment</label>
      <input type="text" name="enrollment" value={student.enrollment} onChange={handleInputChange} />
      <label>CGPA</label>
      <input type="text" name="cgpa" value={student.cgpa} onChange={handleInputChange} />
      <button>Update</button>
      <button onClick={() => props.setAct(false)} className="mybutton">
        Cancel
      </button>
    </form>
  )
}

export default EditStudentForm