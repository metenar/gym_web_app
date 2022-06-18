import { useEffect, useState} from 'react'
import  Pagination  from '@mui/material/Pagination'
import { Box, Stack, Typography} from "@mui/material"
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const Exercises = ({exercises,bodyPart,setExercises}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage=9
  const paginate=(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:"1800",behavior:"smooth"})
  }
  useEffect(() => {
    const fetchExerciseData=async()=>{
      let exercisesData=[]
      if(bodyPart==="all"){
        exercisesData=await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions)
      } else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }
      setExercises(exercisesData)
    }  
    fetchExerciseData()
  }, [bodyPart,setExercises])
  
  const idOfLastExer=currentPage*exercisePerPage
  const idOffirstExer=idOfLastExer-exercisePerPage
  const currentexercise=exercises.slice(idOffirstExer,idOfLastExer)
  return (
    <Box id="exercises"
      sx={{mt:{lg:"110px"}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"100px", xs:"50px"}}} flexWrap="wrap" justifyContent="center">
        {currentexercise.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length>9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
              />
          )}
      
      </Stack>
    </Box>
  )
}

export default Exercises