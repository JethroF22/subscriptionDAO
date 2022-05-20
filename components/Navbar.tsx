import { useState, MouseEvent, ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import SearchBar from "./SearchBar";

function Navbar(): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="navbar-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Manage Subscriptions</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="inherit">
            SubscriptionDAO 🤝
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <SearchBar />
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <Avatar alt="Profile Picture" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Navbar;
