import { TextField, Typography, Button } from '@mui/material'
import React from 'react'

const Addstudent = () => {
  return (
    <div>
        <h1>login page</h1>
       {/* <input placeholder='username'/>
       <input placeholder='password'/>
       <button>submit</button> */}
       <Typography variant='h1'>Student details</Typography>
       <br/><br/>
       <TextField variant='filled' label='name'/>
       <br/><br/>
       <TextField variant='filled' label='age'/>
       <br/><br/>
       <TextField variant='filled' label='department'/>
       <br/><br/>
       <Button variant='text'>submit</Button>
      
    </div>
  )
}

export default Addstudent