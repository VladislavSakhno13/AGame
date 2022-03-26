import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./Component/TopBar";
import { Grid } from "@mui/material";
import { Lending } from "./Component/Lending";

function App() {
  return (
    <Grid container>
      <TopBar />
      <Lending />
    </Grid>
  );
}

export default App;
