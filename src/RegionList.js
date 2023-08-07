import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { findFlagUrlByCountryName } from "country-flags-svg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Item = styled(Button)(({}) => ({
  textAlign: "center",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  padding: 0,
  height: "72px",
  fontWeight: 500,
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  paddingLeft: "16px",
  width: "100%",
  textTransform: "capitalize",
  color: "black",
}));

export default function Regions() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt:'16px'
      }}
    >
      <Grid container spacing={{ xs: "20px" }} columns={{ xs: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={4} key={index}>
            <Item>
              <Avatar src={findFlagUrlByCountryName("Germany")} />
              <Typography sx={{ pl: "16px" }}>Germany</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
