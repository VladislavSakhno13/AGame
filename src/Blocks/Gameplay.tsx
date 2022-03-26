import { Grid, Paper, Typography, FormControl, FormLabel } from "@mui/material";
export const Gameplay = () => {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      {" "}
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Typography>Gameplay</Typography>
      </Grid>
      <Grid container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={12}>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  sx={{
                    height: 340,
                    width: 250,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
