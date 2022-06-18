import React, { useState } from 'react'
import { bmiOptions, fetchData } from '../utils/fetchData'
import { Box, TextField, Button, Stack, Typography } from "@mui/material" 

const BodyWeightIndex = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0)
  const handleSubmit=async()=>{
    if(weight || height){
      const bmiResp=await fetchData(`https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}`,bmiOptions)
      setWeight('')
      setHeight('')
      setBmi(bmiResp.bmi)
    }
  }
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "2.75rem", xs: "1.8rem" } }}
        mb="50px"
        textAlign="center"
      >
        Calculate your Body Weight Index
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            mb: "20px",
          }}
          fullWidth
          required
          label="Weight"
          height="76px"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          placeholder="Weight"
          type="text"
        />
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            
            mb: "20px",
          }}
          fullWidth
          required
          label="Height"
          height="76px"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          placeholder="Height"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",           
          }}
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {bmi>0 && <Typography mt={5} variant="h5">
          Your Body Weight Index is <span style={{color:"#ff2625"}}>{bmi.toFixed(2)}</span>
        </Typography>}
      </Box>
    </Stack>
  );
}

export default BodyWeightIndex