import React, { useState, useEffect } from 'react'
import "../App"

const AddStudentForm = props => {
	// if(!props.act) {
		// const initialFormState = { id: null, name: '', enrollment: '', cgpa: '' }
		const [ student, setStudent ] = useState([])
	// }
	// if(props.act) {
		// const [ student, setStudent ] = useState(props.currentStudent)

		useEffect(
			() => {
		  	setStudent(props.currentStudent)
			},
			[ props ]
		)
	// }

	const handleInputChange = e => {
		const { name, value } = e.target

		setStudent({ ...student, [name]: value })
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				if (!student.name || !student.enrollment || !student.cgpa) return

				// if(!props.act) props.addStudent(student)			
				
				if(props.act) props.updateStudent(student.id, student)
				// setStudent(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={student.name} onChange={handleInputChange} />
			<label>Enrollment</label>
			<input type="text" name="enrollment" value={student.enrollment} onChange={handleInputChange} />
			<label>CGPA</label>
			<input type="text" name="cgpa" value={student.cgpa} onChange={handleInputChange} />
			<button className='tablebutton'>Add</button>
			<button onClick={() => props.setAct(false)} className="mybutton">
        		Cancel
      		</button>
		</form>
	)
}

export default AddStudentForm