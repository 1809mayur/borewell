import { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useTheme from "@mui/material/styles/useTheme";
import constants from "../utils/constants";

const headers = [
  { name: "services", url: "service-section" },
  { name: "contact us", url: "contact-section" },
  { name: "about us", url: "about-section" },
];

export const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useTheme();

  return (
    <>
      <Box
        // bgcolor={"#d0bdf4"}
        padding={"2rem"}
        className="h-16 fixed top-0 z-50 w-full flex justify-between items-center bg-gradient-custom-theme1"
      >
        <Box>{constants.brandName}</Box>
        <Box className="lg:flex justify-evenly w-1/4 xs:hidden">
          {headers.map((header, index) => {
            return <p key={index}> {header.name}</p>;
          })}
        </Box>
        <Box className="lg:hidden">
          {!isMenuOpen ? (
            <MenuIcon
              sx={{
                color: theme.palette.grey[300],
                width: 36,
                height: 36,
              }}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          ) : (
            <CloseIcon
              sx={{
                color: theme.palette.grey[300],
                width: 36,
                height: 36,
              }}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          )}
        </Box>
      </Box>

      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#e0f2fe",
            width: "48%",
          },
        }}
      >
        <List>
          {headers.map((header, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <MenuIcon /> : <CloseIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={header?.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default TopNav;
