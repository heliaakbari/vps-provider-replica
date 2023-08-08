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
  display: "flex",
  flexDirection: "column",
  fontWeight: 500,
  fontSize: "16px",
  alignItems: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  width: "100%",
  textTransform: "capitalize",
  color: "black",
}));

export default function HostName({
  OS,
  quantity,
  region,
  plan,
}) {
  let defaultVal = `${OS}-${region.name}-${plan.memory_size_in_GB}gb`;

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt: "16px",
        p: 0,
      }}
      key={[OS, region.name, plan.memory_size_in_GB]}
    >
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
        {Array.from(Array(quantity)).map((_, index) => (
          <Grid item xs={6} key={index} sx={{ border: "none" }}>
            <Item>
              <TextField
                fullWidth
                id={index}
                size="small"
                defaultValue={
                  index == 0 ? defaultVal : defaultVal + "-" + index
                }
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
