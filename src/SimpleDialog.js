import * as React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SimpleDialog({ open, onClose, content }) {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{'& .MuiDialog-paper':{
    borderRadius:"4px"
  }}}>
      <Box sx={{ backgroundColor: "#2C5EFF" , display:"flex",justifyContent:"center"}}>
        <Typography
          sx={{
            color:'white',
            display: "block",
            m: "15px auto",
            fontSize: "16px",
          }}
        >
          Purchase Details
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ m: "20px" }}>
        <Typography>
          Name: {content.userInfo.firstname} {content.userInfo.lastname}
        </Typography>
        <Typography>Region: {content.Region.name}</Typography>
        <Typography>Plan:</Typography>
        <Typography sx={{ ml: 4 }}>
          <ul>
            <li> CPU: {content.Plan.cpu_cores}</li>
            <li> memory: {content.Plan.memory_size_in_GB} GB</li>
            <li> monthly price: ${content.Plan.monthly_price} </li>
            <li>hourly price: ${content.Plan.hourly_price}</li>
            <li>
              connection speed: up to {content.Plan.connection_up_bound_speed}{" "}
              Gbps
            </li>
          </ul>
        </Typography>
        <Typography>
          operating system: {content.operatingSystem.family}{" "}
          {content.operatingSystem.version}
        </Typography>
        <Typography>quantity: {content.quantity}</Typography>
        <Typography>
          IPv4: {content.IPv4.state == true ? "yes" : "no"}
        </Typography>
        <Typography>total price: ${content.totalPrice}</Typography>
        <Button
          autoFocus
          onClick={handleClose}
          sx={{
            width:'100%',
            display: "block",
            m: "15px auto 0 auto",
            "&.MuiButton-root": {
              background: "rgba(0, 205, 130, 1)",
              color: "white",
              borderRadius: "4px",
            },
          }}
        >
          Confirm
        </Button>
      </Box>
    </Dialog>
  );
}
