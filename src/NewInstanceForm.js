import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import BreadCrumbTop from "./BreadCrumbTop";
import PlanList from "./PlanList";

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
      <Divider />
      <Box
        sx={{
          bgcolor: "white",
          m: "33px 0 0 33px",
          borderRadius: "4px",
          flexGrow: 1,
        }}
      >
        <PlanList />
      </Box>
    </Container>
  );
}
