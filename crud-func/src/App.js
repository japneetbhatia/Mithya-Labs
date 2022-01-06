import React, { useState } from 'react'
import AddStudentForm from './forms/AddStudentForm'
import EditStudentForm from './forms/EditStudentForm'
import StudentTable from './tables/StudentTable'
import "./App.css"

const App = () => {
	const studentData = []

	const initialFormState = { id: null, name: '', enrollment: '' , cgpa: '' }

	const [ students, setStudents ] = useState(studentData)
	const [ currentStudent, setCurrentStudent ] = useState(initialFormState)
	const [ act, setAct ] = useState(false)

	const addStudent = student => {
		student.id = students.length + 1
		setStudents([ ...students, student ])
	}

	const deleteStudent = id => {
		setAct(false)
		setStudents(students.filter(student => student.id !== id))
	}

	const updateStudent = (id, updateStudent) => {
		setAct(false)
		setStudents(students.map(student => (student.id === id ? updateStudent : student)))
	}

	const editRow = student => {
		setAct(true)
		setCurrentStudent({ id: student.id, name: student.name, enrollment: student.enrollment, cgpa: student.cgpa })
	}

	return (
		<div className="main">
      <div className='header'>
        <h2>CRUD App using Hooks</h2>
      </div>
			<div className="container">
				<div className="table">
					<StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent} />
				</div>
        <div className="form">
					{act ? (
						<AddStudentForm
								act={act}
								setAct={setAct}
								// currentStudent={currentStudent}
								// updateStudent={updateStudent}
							/>
					) : (
							<AddStudentForm addStudent={addStudent} />
						
					)}
				</div>
			</div>
		</div>
	)
}

export default App
