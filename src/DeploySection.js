import * as React from "react";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CloudzyLogo from "./CloudzyLogo";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const drawerWidth = 315;

export default function DeploySection({ planPrice = 10, profile, quantity, setQuantity, deployFunc,enableIPv4,setEnableIPv4}) {

  function addQuantity() {
    if (quantity <= 9) {
      setQuantity(quantity + 1);
    }
  }

  function minusQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        p: 0,
        m: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderWidth: " 0",
        },
        border: "none",
      }}
      variant="permanent"
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "#F1F9FE",
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <NotificationsNoneIcon sx={{ fontSize: "24px" }} />
        <Box
          disableGutters
          sx={{
            w: "133px",
            h: "36px",
            display: "flex",
            mx: "16px",
            flexDirection: "row",
            alignIt: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(189, 189, 189, 1)",
            borderRadius: 4,
          }}
        >
          <AddIcon sx={{ m: "8px" }} />
          <Typography sx={{ width: "93px" }}>
            $ {profile ? profile.balance : "0.00"}
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Avatar sx={{ bgcolor: "#BDBDBD", mr: "32px", ml: "16px" }}>
          <PersonIcon sx={{ fontSize: 24, color: "white" }} />
        </Avatar>
      </Toolbar>
      <Divider />
      <Box
        sx={{
          mr: "32px",
          ml: "16px",
          mt: 4,
          p: "20px",
          pt: "32px",
          bgcolor: "white",
          borderRadius: "4px",
        }}
      >
        <Typography variant="h7">Instance quantity:</Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #BDBDBD",
            borderRadius: "4px",
            width: "100%",
            height: "40px",
          }}
        >
          <Button disableTouchRipple disableFocusRipple onClick={minusQuantity}>
            <RemoveIcon onClick={minusQuantity} />
          </Button>
          <div
            style={{
              textAlign: "center",
              borderRight: "1px solid #BDBDBD",
              borderLeft: "1px solid #BDBDBD",
              height: "40px",
              display: "flex",
              flexGrow: "1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>{quantity}</Typography>
          </div>
          <Button disableTouchRipple disableFocusRipple onClick={addQuantity}>
            <AddIcon />
          </Button>
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox size="medium" onChange={(e) => setEnableIPv4(e)} />
            }
            label="Enable IPv4"
            sx={{
              my: "16px",
              "& .MuiFormControlLabel-label": {
                fontSize: "16px",
                fontWeight: 400,
              },
            }}
          />
        </FormGroup>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 0,
            m: 0,
            my: "24px",
            bgcolor: "background.paper",
            borderRadius: 4,
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
            Total
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              p: 0,
              m: 0,
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
              $
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "500", px: "4px" }}>
              {(planPrice * quantity).toFixed(2)}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#757575",
                pt: 1,
              }}
            >
              /month
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={deployFunc}
            sx={{
              width: "243px",
              height: "40px",
              boxShadow: "none",

              "&.MuiButton-root": {
                background: "rgba(0, 205, 130, 1)",
                color: "white",
                borderRadius: "4px",
              },
            }}
          >
            DEPLOY NOW
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
