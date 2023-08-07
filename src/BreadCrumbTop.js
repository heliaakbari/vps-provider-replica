import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider"

export default function BreadCrumbTop() {
  return (
    <AppBar sx={{boxShadow:'none'}}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ height: "64px", display: "flex", pl: "252px", bgcolor: "white" }}
      >
        <Link underline="hover" color="inherit" href="/" sx={{ pr: "12px" }}>
          Instances
        </Link>
        <Typography variant="h7" color="text.primary" sx={{ pl: "12px" }}>
          New Instance
        </Typography>
      </Breadcrumbs>
      <Divider />
    </AppBar>
  );
}
