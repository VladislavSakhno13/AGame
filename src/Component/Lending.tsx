import { Grid } from "@mui/material";
import { About } from "../Blocks/About";
import { Gameplay } from "../Blocks/Gameplay";
import { RoadMap } from "../Blocks/RoadMap";
import { Team } from "../Blocks/Team";
import { Partners } from "../Blocks/Partners";
export const Lending = () => {
  return (
    <Grid container style={{ marginTop: "67px" }}>
      <About />
      <Gameplay />
      <RoadMap />
      <Team />
      <Partners />
    </Grid>
  );
};
