import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
            <Typography sx={{ flexGrow: 1 }} align='left' variant='h6'>
                  APP
                </Typography>
                <Button>
                  <Link to='/d' Style={{color:'white'}}>Login</Link>
                </Button>
                {/* <Button>
                  <Link to='/a' Style={{color:'white'}}>Login</Link>
                </Button> */}
                <Button>
                  <Link to='/b' Style={{color:'white'}}>Viewstudent</Link>
                </Button>
                <Button>
                  <Link to='/c' Style={{color:'white'}}>Apist</Link>
                </Button>
                <Button>
                  <Link to='/' Style={{color:'white'}}>Addstudent</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar