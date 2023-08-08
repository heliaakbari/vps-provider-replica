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
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";

const Item = styled(Box)(({}) => ({
  textAlign: "center",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: 4,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  height: "133px",
  fontWeight: 500,
  fontSize: "16px",
  justifyContent: "space-evenly",
  padding: "0 16px",
  width: "100%",
  textTransform: "capitalize",
  color: "black",
}));

export default function OS({ operatingSystems, setSelectedOS, OSfamily ,selectedOS}) {
  let families = new Set(
    operatingSystems.map((operatingSystems) => operatingSystems.family)
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        mt: "16px",
      }}
    >
      <Grid container spacing={{ xs: "20px" }} columns={{ xs: 12 }}>
        {Array.from(families).map((item, index) => (
          <Grid item xs={4} key={index}>
            <Item
              sx={{
                width: "100%",
                border:
                  item == OSfamily
                    ? "2px solid rgba(44, 94, 255, 1)"
                    : "1px solid rgba(189, 189, 189, 1)",
              }}
            >
              <Box
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Avatar sx={{ ".MuiAvatar-fallback": { display: "none" } }}>
                  <LaptopWindowsIcon sx={{ color: "white", width: "100%" }} />
                </Avatar>
                <Typography sx={{ pl: "16px" }}>{item}</Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth size="small" key={selectedOS}>
                  <Select
                    fullWidth
                    labelId={index}
                    value={
                      item == OSfamily ? operatingSystems[selectedOS].version : "Select version"
                    }
                  >
                    <MenuItem value="Select version" disabled>
                      Select version
                    </MenuItem>
                    {Array.from(operatingSystems).map((option, i) =>
                      option.family == item ? (
                        <MenuItem
                          value={option.version}
                          onClick={setSelectedOS(i)}
                        >
                          {option.version}
                        </MenuItem>
                      ) : null
                    )}
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
