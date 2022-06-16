import React from 'react'
import "./app.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from './components /Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components /Footer'
import BodyWeightIndex from './pages/BodyWeightIndex'

function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        <Route path="/exercise/bmi" element={<BodyWeightIndex />}/>
    </Routes>
    <Footer />
    </Box>
  )
}

export default App