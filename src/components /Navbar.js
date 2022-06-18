import React from 'react'
import { Link } from "react-router-dom"
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:"122px", xs:"40px"},mt:{sm:"2rem", xs:"1.25rem"},justifyContent:"none"}} px="20px">
      <Link to="/" style={{textDecoration:"none", color:"#255d99", fontSize:"1.5rem", fontWeight:"700"}}>        
        NarTech.
      </Link>
      <Stack 
        direction='row' 
        gap="40px"
        fontSize="1.5rem"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration:"none", color:"#3A1212", fontSize:"1.5rem", borderBottom:"3px solid #FF2625"}}>
            Home
        </Link>
        <a href='#exercises' style={{textDecoration:"none", color:"#3A1212"}}>Exercises</a>
        <Link to="/exercise/bmi" style={{textDecoration:"none", color:"#3A1212", fontSize:"1.5rem"}}>
            BMI
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar