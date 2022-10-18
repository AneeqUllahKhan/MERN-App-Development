import axios from "axios";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Grid from "@mui/material/Grid";
import { useEffect} from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Card } from "@mui/material";
import { CardContent, CardMedia } from "@mui/material";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Render from "./Render";

const Home = () => {
    const[data,setData] = useState([])

    let getData= () =>{
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2636e9f7bdf448bb8ccce5a1ca2266ad')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    let navigate = useNavigate();
    let moveData = (data) => {
      navigate('/Render',{
        state:data
      }) }

      useEffect(() => {
        getData();
      }, []);
  return (
    <div>

      <Container>
        <Grid container sx={{ marginTop: "100px" }} spacing={3}>
          {data.map((e, i) => (
            <Grid item md={3} xs={12} sm={6} key={i}>
              <Card onClick={()=>moveData(e)} className="bgLight" sx={{ maxWidth: 345 }}>
                <CardMedia>
                  <Typography variant="h1" color="initial">{e.articles}</Typography>
                </CardMedia>
                <CardContent>
                  <Tooltip title={e.articles.title}>
                    <Typography
                      sx={{ height: 60, overflow: "hidden", fontSize: "18px" }}
                      variant="h6"
                    >
                      {e.title.slice(0, 30) +
                        (e.title.length > 30 ? "..." : "")}
                    </Typography>
                  </Tooltip>
                  <Chip label={e.category} />
                  <Typography sx={{ fontSize: "16px" }}>
                    Rs {e.price}/-
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Routes>
        <Route path='Render' element={<Render/>}/>
      </Routes>
      
    </div>
  )
}

export default Home
