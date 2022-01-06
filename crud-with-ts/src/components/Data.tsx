import React from 'react'
import {IState} from "./Model"

interface Props{
    students: IState[];
    setStudents: React.Dispatch<React.SetStateAction<IState[]>>
}

const DataTable: React.FC<Props> = ({students, setStudents}) => {
    return (
        <div className='table-data'>
            <h1>students.name</h1>
            <h1>students.enrollment</h1>
            <h1>students.cgpa</h1>
        </div>
    )
}

export default DataTable
