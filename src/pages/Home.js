import { useState } from 'react'
import { Box } from "@mui/material"
import Banner from '../components /Banner'
import SearchBar from '../components /SearchBar'
import Exercises from '../components /Exercises'



const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchBar />
      <Exercises />
    </Box>
  )
}

export default Home