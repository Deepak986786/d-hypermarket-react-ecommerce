import { React, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ pages }) => {
 
  const [openD, setOpenD] = useState(false);
  return (
    <>
      <Drawer open={openD} onClose={() => setOpenD(false)}>
        <List>
          {[...pages, "Login", "Logout"].map((page, index) => (
            <ListItemButton key={index} onClick={() =>setOpenD(!openD)}>
              <ListItemIcon>
                <ListItemText key={index}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenD(!openD)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
};

export default Sidebar;
