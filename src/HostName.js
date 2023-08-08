import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Item = styled(Box)(({}) => ({
  textAlign: "center",
  borderRadius: '4px',
  margin: "8px",
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

export default function HostName({ OS, quantity, region, plan, hostArrays }) {
  let defaultVal = `${OS}-${region.name}-${plan.memory_size_in_GB}gb`;
  hostArrays = new Array(quantity);
  Array.from(hostArrays).map((_, index) => (
    hostArrays[index] = (index == 0 ? defaultVal: defaultVal+'-'+index)
  ));
  function hello(){
    console.log("hello")
  }
  function changedValue(e){
    hostArrays[e.target.id]=e.target.value
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt: "16px",
        p:0
      }}
      key={[OS, region.name, plan.memory_size_in_GB,quantity]}
    >
      <Grid container spacing={{ xs: "20px" }} columns={{ xs: 12 }} onChange={hello}>
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
                onChange={changedValue}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
