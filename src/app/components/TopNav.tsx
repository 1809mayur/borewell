import { Box } from "@mui/material";

const headers = [
  { name: "services", url: "service-section" },
  { name: "contact us", url: "contact-section" },
  { name: "about us", url: "about-section" },
];

export const TopNav = () => {
  return (
    <Box
      // bgcolor={"#d0bdf4"}
      className="h-16 fixed top-0 z-50 w-full flex justify-around items-center bg-gradient-custom-theme1"
    >
      <Box>Brand Name</Box>
      <Box className="lg:flex justify-evenly w-1/4 xs:hidden">
        {headers.map((header, index) => {
          return <p key={index}> {header.name}</p>;
        })}
      </Box>
      <Box className="lg:hidden">menus</Box>
    </Box>
  );
};

export default TopNav;
