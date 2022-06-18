import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollBar from "../components /HorizontalScrollBar"
import Loader from './Loader'

const SmillarExercises = ({targetMuscle,equipmentData}) => {
  return (
    <Box sx={{mt:{lg:"100px", xs:"0"}}}>
      <Typography variant='h4' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:"2", position:"relative"}}>
        {targetMuscle.length ? <HorizontalScrollBar data={targetMuscle}/> : <Loader />}
      </Stack>
      <Typography variant='h4' mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p:"2", position:"relative"}}>
        {equipmentData.length ? <HorizontalScrollBar data={equipmentData}/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SmillarExercises