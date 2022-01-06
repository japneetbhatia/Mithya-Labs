import React, { useState } from 'react'
import DataForm from './DataForm'
import "./Crud.css"
import Data from './Data'
import { IState } from './Model'

const Crud: React.FC = () => {
	const[ sName, setName ] = useState<string>("");
	const[ sEnrollment, setEnrollment ] = useState<string>("");
	const[ sCGPA, setCGPA ] = useState<string>("");
	
	const [ students, setStudents ] = useState<IState[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		if(sName && sEnrollment && sCGPA)  {
			setStudents([...students, {id: Date.now(), name: sName, enrollment: sEnrollment, cgpa: sCGPA}])
			setName("");
			setEnrollment("");
			setCGPA("");
		}

		console.log(students);
	}

	return (
		<div className='container-crud'>	
			<div className='heading-crud'>
				<h1>CRUD-APP</h1>
			</div>		
			<div className='bottom-crud'>
				<div className='bottom-left-crud'>
					<Data students={students} setStudents={setStudents} />
				</div>
				<div className='bottom-right-crud'>
					<DataForm sName={sName} setName={setName} 
							  sEnrollment={sEnrollment} setEnrollment={setEnrollment} 
							  sCGPA={sCGPA} setCGPA={setCGPA} 
						handleAdd={handleAdd} />
				</div>
			</div>
		</div>
	)
}

export default Crud
