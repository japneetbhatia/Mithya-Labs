import React, { useState } from 'react'
import { IState } from './Model';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    student: IState;
    students: IState[];
    setStudents: React.Dispatch<React.SetStateAction<IState[]>>
}

const SingleData: React.FC<Props> = ({student, students, setStudents}) => {

        const [edit, setEdit] = useState<boolean>(false);
        const [editStudent, setEditStudent] = useState<string>(student.name);

        const handleEdit = (e: React.FormEvent, id: number) => {
            e.preventDefault();
            setStudents(
              students.map((student) => (student.id === id ? { ...student, student: editStudent } : student))
            );
            setEdit(false);
        }

    const handleDelete = (id: number) => {
        setStudents(students.filter((student) => student.id !== id));
    }

    return (
        <form className='single-data'>
            <div className='text'>
                <li>{student.name}</li>
                <li>{student.enrollment}</li>
                <li>{student.cgpa}</li>
            </div>
            <div className='icons'>
                <EditIcon onClick={() => {if(!edit) setEdit(!edit)}}/>
                
                <DeleteIcon onClick={() => handleDelete(student.id)} />
            </div>
        </form>
    )
}

export default SingleData
