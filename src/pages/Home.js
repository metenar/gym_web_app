import { useState } from 'react'
import { Box } from "@mui/material"
import Banner from '../components /Banner'
import SearchBar from '../components /SearchBar'
import Exercises from '../components /Exercises'



const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <Banner />
      <SearchBar bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>
    </Box>
  )
}

export default Home