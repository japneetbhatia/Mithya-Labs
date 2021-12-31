import React, { useState } from 'react'
import "../App"

const AddStudentForm = props => {
	const initialFormState = { id: null, name: '', enrollment: '', cgpa: '' }
	const [ student, setStudent ] = useState(initialFormState)

	const handleInputChange = e => {
		const { name, value } = e.target

		setStudent({ ...student, [name]: value })
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				if (!student.name || !student.enrollment || !student.cgpa) return

				props.addStudent(student)
				setStudent(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={student.name} onChange={handleInputChange} />
			<label>Enrollment</label>
			<input type="text" name="enrollment" value={student.enrollment} onChange={handleInputChange} />
			<label>CGPA</label>
			<input type="text" name="cgpa" value={student.cgpa} onChange={handleInputChange} />
			<button className='tablebutton'>Add</button>
		</form>
	)
}

export default AddStudentForm