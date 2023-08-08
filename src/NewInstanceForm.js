import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import BreadCrumbTop from "./BreadCrumbTop";
import PlanList from "./PlanList";
import Regions from "./RegionList";
import Typography from "@mui/material/Typography";
import OS from "./OSList";
import HostName from "./HostName";

export default function NewInstanceForm({
  regions,
  operatingSystems,
  newSelectedRegion,
  regionPlans,
  setSelectedPlan,
  selectedPlan,
  selectedOS,
  setSelectedOS,
  OSfamily,
  quantity,
  region,
  plan,
}) {
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
          borderRadius: 4,
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
        <Regions
          region={region}
          regions={regions}
          newSelectedRegion={newSelectedRegion}
        />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "56px 0 16px 32px" }}>
            Plan
          </Typography>
        </Box>
        <PlanList
          regionPlans={regionPlans}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
          selectedOS={selectedOS}
        />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "56px 0 0 32px" }}>
            Operating System
          </Typography>
        </Box>
        <OS
          operatingSystems={operatingSystems}
          setSelectedOS={setSelectedOS}
          selectedOS={selectedOS}
          OSfamily={OSfamily}
        />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "20px", margin: "32px 0 0 32px" }}>
            Hostname
          </Typography>
        </Box>
          <HostName
            OS={OSfamily}
            quantity={quantity}
            region={region}
            plan={plan}
          />
      </Box>
    </Container>
  );
}
