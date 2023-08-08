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
  borderRadius: 4,
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

export default function Regions({ regions, newSelectedRegion ,region }) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          width: "90%",
          mt: "16px",
        }}
      >
        <Grid container spacing={{ xs: "20px" }} columns={{ xs: 12 }} key={newSelectedRegion.name}>
          {Array.from(regions).map((item, index) => (
            <Grid item xs={4} key={index}>
              <Item
                onClick={newSelectedRegion({ item })}
                sx={{
                  border:
                    region.name == item.name
                      ? "2px solid rgba(44, 94, 255, 1)"
                      : "1px solid rgba(189, 189, 189, 1)"
                }}
              >
                <Avatar
                  sx={{ ".MuiAvatar-fallback": { display: "none" } }}
                  alt="hi"
                  src={findFlagUrlByCountryName(item.name)}
                />
                <Typography sx={{ pl: "16px" }}>{item.name}</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

