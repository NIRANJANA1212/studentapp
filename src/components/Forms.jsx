import { TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';


const Forms = (props) => {
    var[temp,setTemp] = useState({
    name: props.data.name,
    age: props.data.age,
    dept: props.data.dept

    })
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setTemp(temp)
    }
    // var[temp,setTemp] = useState();
    // const inputHandler = (e) => {
    //     console.log('on')
    //     setTemp({...temp,[e.target.name]:e.target.value});//value in name is moved to value
    //     console.log(temp);
    // }
    const submit = () => { 
                    axios
            .post("http://localhost:4001/students", {
                student_name:temp.name,
                student_age:temp.age,
                student_dept:temp.dept,
            })
            .then(() => {
                alert("new entry created sucessfully");
            })
            .catch(() => {
                alert("error saving data");
            });
        }
  return (
    <div>
        <Typography variant='h6'>Login</Typography>
        <br/><br/><br/>
        <TextField variant='filled' name='name' onChange={inputHandler} label='name'/>
        <br/><br/><br/>
        <TextField variant='filled' name='age' onChange={inputHandler} label='age'/>
        <br/><br/><br/>
        <TextField variant='filled' name='dept' onChange={inputHandler} label='dept'/>
        <br/><br/><br/>
        <Button variant='text' onClick={submit} >submit</Button>


    </div>
  )
}

export default Forms