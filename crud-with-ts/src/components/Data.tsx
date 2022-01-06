import React from 'react'
import {IState} from "./Model"
import "./Data.css"
import SingleData from './SingleData'

interface Props{
    students: IState[];
    setStudents: React.Dispatch<React.SetStateAction<IState[]>>
}

const DataTable: React.FC<Props> = ({students, setStudents}) => {
    return (
        <div className='data-table'>
            {
                students.map((student) => {
                    <SingleData student={student} key={student.id} students={students} setStudents={setStudents}/>
                    // <>
                    //     <li>{x.name}</li>
                    //     <li>{x.enrollment}</li>
                    //     <li>{x.cgpa}</li>
                    //      console.log(x.name);
                    // </>
                }) 
            }
        </div>
    )
}

export default DataTable
