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
import { ThemeContext } from "@emotion/react";

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
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <CloudzyLogo />
      </Toolbar>
      <Divider />
      <Box sx={{ pt: "20px", px: "20px" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <DashboardOutlinedIcon />
              <ListItemText sx={{ ml: "8px" }} primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            disableTouchRipple
              sx={{
                cursor: "default",
                "&.MuiButtonBase-root": {
                  background: "rgba(44, 94, 255, 1)",
                  color: "white",
                },
              }}
            >
              <AddBoxOutlinedIcon sx={{ color: "white" }} />
              <ListItemText sx={{ ml: "8px" }} primary="Instances" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ContentCopyIcon />

              <ListItemText sx={{ ml: "8px" }} primary="Snapshots" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <VpnKeyOutlinedIcon />

              <ListItemText sx={{ ml: "8px" }} primary="SSH Keys" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding disabled>
            <ListItemButton>
              <DnsOutlinedIcon />
              <ListItemText sx={{ ml: "8px" }} primary="Volume" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
      <List sx={{ pb: "20px", px: "20px" }}>
        <ListItemButton onClick={handleClick}>
          <AttachMoneyOutlinedIcon />
          <ListItemText sx={{ ml: "8px" }} primary="Billing" />
          {!open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton disablePadding>
              <ListItemText sx={{ ml: "30px" }} primary="Invoices" />
            </ListItemButton>
            <ListItemButton disablePadding>
              <ListItemText sx={{ ml: "30px" }} primary="Payments" />
            </ListItemButton>
            <ListItemButton disablePadding>
              <ListItemText sx={{ ml: "30px" }} primary="Transactions" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <WifiOutlinedIcon />

            <ListItemText sx={{ ml: "8px" }} primary="Networking" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <InsertDriveFileOutlinedIcon />

            <ListItemText sx={{ ml: "8px" }} primary="Report" />
          </ListItemButton>
        </ListItem>
      </List>

      <List style={{ marginTop: `auto` }} sx={{ px: "20px", pb: "20px" }}>
        <ListItem
          disablePadding
          sx={{
            border: "1px solid rgba(189, 189, 189, 1)",
            borderRadius: 4,
            height: 40,
          }}
        >
          <ListItemButton>
            <HeadphonesOutlinedIcon />

            <ListItemText sx={{ ml: "8px" }} primary="Support" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            border: "1px solid rgba(189, 189, 189, 1)",
            borderRadius: 4,
            mt: "4px",
            height: 40,
          }}
        >
          <ListItemButton>
            <ListItemText sx={{ ml: "8px" }} primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
