import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { findFlagUrlByCountryName } from "country-flags-svg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Item = styled(Button)(({}) => ({
  textAlign: "center",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  padding: 0,
  display:'flex',
  flexDirection:'column',
  height: "133px",
  fontWeight: 500,
  fontSize: "16px",
  alignItems: "center",
  justifyContent: "center",
  alignItems:'center',
  padding: "0 16px",
  width: "100%",
  textTransform: "capitalize",
  color: "black",
}));

export default function OS() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt: "16px",
      }}
    >
      <Grid container spacing={{ xs: "20px" }} columns={{ xs: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={4} key={index}>
            <Item>
              <Box
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flex:'left',
                  justifyContent:'space-between'
                }}
              >
                <Avatar src={findFlagUrlByCountryName("Germany")} />
                <Typography sx={{ pl: "16px" }}>Germany</Typography>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                  fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
