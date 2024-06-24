import React from 'react'
import { AppBar,Toolbar,Box,Typography } from '@mui/material'
const Header = () => {
  return (
   <Box>
    <AppBar position='static'>
<Toolbar variant='dense'>
    <Typography>
        hello world!
    </Typography>
</Toolbar>
    </AppBar>
   </Box>
  )
}

export default Header