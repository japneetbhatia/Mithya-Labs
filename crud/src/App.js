import React, { Component } from 'react'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentData : [],
      act : 0,
      index : ""
    }
  }
  
  handleFormReloading = (e) => {
    e.preventDefault();
    let studentData = this.state.studentData;
    let name = this.refs.textName.value;
    let enrollment = this.refs.textRoll.value;
    let cgpa = this.refs.textCGPA.value;

    if(this.state.act === 0) {
      let newStudent = {
        "name": name,
        "enrollment": enrollment,
        "cgpa": cgpa
      }
      studentData.push(newStudent);
    } else {
      let index = this.state.index;
      studentData[index].name = name;
      studentData[index].enrollment = enrollment;
      studentData[index].cgpa = cgpa;
    }    

    this.setState({
      studentData: studentData,
      act: 0
    })
    this.refs.studentForm.reset();
    this.refs.textName.focus();
  }

  handleEdit = (i) => {
    let newStudent = this.state.studentData[i];  
    // console.log(newStudent);
    this.refs.textName.value = newStudent.name;
    this.refs.textRoll.value = newStudent.enrollment;
    this.refs.textCGPA.value = newStudent.cgpa;
    
    this.setState({
      // studentData: newStudent,
      act : 1,
      index : i
    })
  }

  handleDelete = (i) => {
    let studentData = this.state.studentData;
    studentData.splice(i, 1);
    this.setState({
      studentData : studentData
    });
    this.refs.textName.focus();
  }

  render() {
    let studentData = this.state.studentData;
    return (
      <div className='container'>
        <div className='table'>
          <table>
            <tr>
              <th>Name</th>
              <th>Enrollment No.</th>
              <th>CGPA</th>
            </tr>
            {
              studentData.map((newStudent, i) => 
                <tr key={i}>
                  <td>{newStudent.name}</td>
                  <td>{newStudent.enrollment}</td>
                  <td>{newStudent.cgpa}</td>
                  <td>
                    <button onClick={e => this.handleEdit(i)}>EDIT</button>
                  </td>
                  <td>
                    <button onClick={e => this.handleDelete(i)}>DELETE</button>
                  </td>
                </tr>
              )
            }
          </table>
        </div>
        <div className='form'>
          <form ref="studentForm">
            <label>Name</label>
            <input type="text" ref="textName" placeholder="Enter your Name" />
            <label>Enrollment No.</label>
            <input type="text" ref="textRoll" placeholder="Enter your Enrollment" />
            <label>CGPA</label>
            <input type="text" ref="textCGPA" placeholder="Enter your CGPA" />
            <button onClick={e => this.handleFormReloading(e)} className='button'>ADD</button>
          </form>
        </div>        
      </div>
    )
  }
}

export default App;