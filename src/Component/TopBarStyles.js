import { createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: { root: { backgroundColor: "red", position: "fixed" } },
    },
  },
});
export default theme;
