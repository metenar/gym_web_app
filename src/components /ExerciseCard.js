import React from 'react'
import { Link } from "react-router-dom"
import { Button, Stack, Typography} from "@mui/material"

const ExerciseCard = ({exercise}) => {
  return (
    <Link  className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button sx={{ml:"21px", color:"#fff", background:"#ffa9a9", fontSize:"0.8rem", borderRadius:"20px", textTransform:"capitalize", "&:hover":{background:"#cd5d5d"}}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"21px", color:"#fff", background:"#fcc757", fontSize:"0.8rem", borderRadius:"20px", textTransform:"capitalize", "&:hover":{background:"#b18119"}}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" textTransform="capitalize" fontSize="1.3rem" mt="11px" pb="10px">
            {exercise.name}
        </Typography>
    </Link>

  )
}

export default ExerciseCard