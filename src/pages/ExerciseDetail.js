import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material"
import {exerciseOptions, fetchData, youtubeOptions} from "../utils/fetchData"
import Detail from '../components /Detail'
import ExerciseVideos from '../components /ExerciseVideos'
import SmillarExercises from '../components /SmillarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [equipmentData, setEquipmentData] = useState([])
  const { id }= useParams()
  useEffect(() => {
    const fetchExerciseDetail=async()=>{
      const resp=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(resp)
      const youtubeResp=await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${resp.name}`,youtubeOptions)
      setYoutubeVideos(youtubeResp.contents)
      const targetMuscleExerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${resp.target}`,exerciseOptions)
      setTargetMuscle(targetMuscleExerciseData)
      const equipmentExerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${resp.equipment}`,exerciseOptions)
      setEquipmentData(equipmentExerciseData)
    }
    fetchExerciseDetail()
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeVideos={youtubeVideos} name={exerciseDetail.name}/>
      <SmillarExercises targetMuscle={targetMuscle} equipmentData={equipmentData}/>
    </Box>
  )
}

export default ExerciseDetail