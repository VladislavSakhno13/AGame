import { Grid, Typography } from "@mui/material";
export const RoadMap = () => {
  return (
    <Grid container style={{ border: "1px solid red", height: "500px" }}>
      {" "}
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Typography>Road Map</Typography>
      </Grid>
    </Grid>
  );
};
