import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloudzyLogo from "./CloudzyLogo";
import Box from "@mui/material/Box";

const drawerWidth = 220;

export default function LeftSideBar(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
        },
      }}
      variant="permanent"
      anchor={props.side}
    >
      <Toolbar sx={{display:'flex',justifyContent:'center'}}>
        <CloudzyLogo />
      </Toolbar>
      <Divider />
      <Box sx={{ pt: "40px", px: "20px" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Instances" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContentCopyIcon />
              </ListItemIcon>
              <ListItemText primary="Snapshots" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VpnKeyOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="SSH Keys" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding disabled>
            <ListItemButton>
              <ListItemIcon>
                <DnsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Volume" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        </Box>
        <List sx={{ pb: "20px" , px:'20px'}}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AttachMoneyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Billing" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton disablePadding>
                <ListItemIcon />
                <ListItemText primary="Invoices" />
              </ListItemButton>
              <ListItemButton disablePadding>
                <ListItemIcon />
                <ListItemText primary="Payments" />
              </ListItemButton>
              <ListItemButton disablePadding>
                <ListItemIcon />
                <ListItemText primary="Transactions" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WifiOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Networking" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InsertDriveFileOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
        </List>

      <List style={{ marginTop: `auto` }} sx={{px:'20px', pb: "20px" }}>
        <ListItem disablePadding sx={{ border: 1 }}>
          <ListItemButton>
            <ListItemIcon>
              <HeadphonesOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ border: 1, mt: "4px" }}>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
