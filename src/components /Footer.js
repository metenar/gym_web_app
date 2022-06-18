import React from 'react'
import {Box,Stack,Typography} from "@mui/material"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <Typography color="#255d99" sx={{fontSize:"1.5rem", fontWeight:"700"}}>
        NarTech.
      </Typography>
      <Typography variant='h6' pb="40px" mt="20px">
        Copyright NarTech. 
      </Typography>
    </Stack>
    </Box>
  )
}

export default Footer