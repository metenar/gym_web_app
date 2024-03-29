import React from 'react'
import { Box, Typography, Button } from "@mui/material"
import bannerImage from "../assets/images/banner1.jpg"

const Banner = () => {
  return (
    <Box sx={{
        mt:{lg:"212px", xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="1.6rem">
            Fitnes Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"40px"}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize={"22px"} lineHeight="35px" mb={4}>
            Check out the most effective exercises.
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{backgraundColor:"#ff2625", padding:"10px"}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#ff2625" sx={{
            opacity:"0.1",
            display:{lg:"block", xs:"none"}
        }} fontSize="12.5rem">
            Exercise
        </Typography>
        <img src={bannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default Banner