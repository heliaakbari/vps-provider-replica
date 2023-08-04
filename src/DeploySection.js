import * as React from "react";
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
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const drawerWidth = 315;

export default function DeploySection() {
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
          borderWidth: 0,
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
      <Toolbar sx={{ bgcolor: "white" }}>
      </Toolbar>
      <Divider />
      <Box
        sx={{
          mr: "32px",
          mt: 4,
          p: "20px",
          pt: "32px",
          bgcolor: "white",
        }}
      >
        <Typography>Instance quantity:</Typography>

        <div
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "space-evenly",
            border: "1px solid #BDBDBD",
            borderRadius:'4px',
            width:'243px',
            height:'40px'
          }}
        >
          <div>
            <RemoveIcon/>
          </div>
          <div
            style={{
              flexGrow: 1,
              textAlign: "center",
              borderRight: "1px solid #BDBDBD",
              borderLeft: "1px solid #BDBDBD",
              maxWidth:'147px',
              height:'40px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Typography>3</Typography>
          </div>
          <div>
            <AddIcon />
          </div>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label="Enable IPV4"
            sx={{
              my: "16px",
              "& .MuiFormControlLabel-label": { fontSize: "16px" },
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
            borderRadius: 1,
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
              13.49
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: "243px",
              height: "40px",
              bgcolor: "#00CD82",
              boxShadow: "none",
            }}
          >
            DEPLOY NOW
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
