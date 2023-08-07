import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Item = styled(Box)(({}) => ({
  textAlign: "center",
  borderRadius: "4px",
  margin: "8px",
  display: "flex",
  flexDirection: "column",
  fontWeight: 500,
  fontSize: "16px",
  alignItems: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 16px",
  width: "100%",
  textTransform: "capitalize",
  color: "black",
}));

export default function HostName() {

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt: "16px",
      }}
    >
      <Grid container spacing={{ xs: "0"}} columns={{ xs: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={6} key={index} sx={{border:'none'}}>
            <Item>
                <TextField fullWidth  id="fullWidth" size="small" />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
