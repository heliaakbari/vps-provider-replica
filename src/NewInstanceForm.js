import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import BreadCrumbTop from "./BreadCrumbTop";
import PlanList from "./PlanList";
import Regions from "./RegionList";
import Typography from "@mui/material/Typography";
import OS from "./OSList";
import HostName from "./HostName"

export default function NewInstanceForm() {
  return (
    <Container
      disableGutters
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        bgcolor: "#F1F9FE",
      }}
    >
      <BreadCrumbTop />
      <Box
        sx={{
          bgcolor: "white",
          m: "97px 0 33px 33px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          pb: "32px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "32px 0 0 32px" }}>
            Region
          </Typography>
        </Box>
        <Regions />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "56px 0 16px 32px" }}>
            Plan
          </Typography>
        </Box>
        <PlanList />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "56px 0 0 32px" }}>
            Operating System
          </Typography>
        </Box>
        <OS />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "32px 0 0 32px" }}>
            Hostname
          </Typography>
        </Box>
        <HostName />
      </Box>
    </Container>
  );
}
