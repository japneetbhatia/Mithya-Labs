import React from 'react'
import "./DataForm.css"

interface Props {
	sName: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
    sEnrollment: string;
	setEnrollment: React.Dispatch<React.SetStateAction<string>>;
    sCGPA: string;
	setCGPA: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const DataForm: React.FC<Props> = ({ sName, setName, sEnrollment, setEnrollment, sCGPA, setCGPA, handleAdd}) => {
    return (
        <div className='data-form'>
            <form onSubmit={(e) =>handleAdd(e)}>
                <label>Name</label>
                <input type="text" placeholder='Enter Your Name' 
                    value={sName} onChange={(e) => setName(e.target.value)} />
                <label>Enrollment</label>
                <input type="text" placeholder='Enter Your Enrollment' 
                    value={sEnrollment} onChange={(e) => setEnrollment(e.target.value)} />
                <label>CGPA</label>
                <input type="text" placeholder='Enter Your CGPA' 
                    value={sCGPA} onChange={(e) => setCGPA(e.target.value)} />
                <button className='button'>Add</button>
                
            </form>
        </div>
    )
}

export default DataForm
