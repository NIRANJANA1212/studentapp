import { TextField, Typography, Button } from '@mui/material'
import React from 'react'

const Loginst = () => {
  return (
    <div>
       <h1>login page</h1>
       {/* <input placeholder='username'/>
       <input placeholder='password'/>
       <button>submit</button> */}
       <Typography variant='h1'>login page</Typography>
       <br/><br/>
       <TextField variant='filled' label='username'/>
       <br/><br/>
       <TextField variant='filled' label='password'/>
       <br/><br/>
       <Button variant='text'>submit</Button>
      

    </div>
  )
}

export default Loginst