import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "./Sidebar";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Navbar = () => {
  const PAGES = ["Products", "Services", "Contact", "About"];
  const [value, setValue] = useState(0);
  // const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar sx={{ background: `` }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          <Typography sx={{ marginLeft: "10%" }}>D-Hypermarket</Typography>

          {isMatch ? (
            <Sidebar pages={PAGES} />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                r="#fff"
              >
                {PAGES.map((page, index) => {
                  return <Tab key={index} label={page}></Tab>;
                })}
                {/* <Tab label="Products" />
              <Tab label="Services" />
              <Tab label="Contact Us" />
              <Tab label="About" /> */}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
