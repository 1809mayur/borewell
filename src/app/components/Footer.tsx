import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import constants from "../utils/constants";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Grid>
        {/* first row */}
        <Grid
          item
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent={"space-between"}
          p={2}
          // bgcolor={"#00ddff"}
          className="bg-gradient-custom-theme1"
        >
          {/* column one  */}
          <Grid
            width={{ xs: "100%", lg: "30%" }}
            textAlign={{ xs: "center", lg: "left" }}
            marginBottom={{ xs: 2, lg: 0 }}
          >
            <Grid item height={48}>
              <Typography variant="h6">
                {" "}
                About {constants.brandName}{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={"p"}>
                Ganga Sagar Borewells are one of the leading Borewell Drilling
                company in Harda. we are preferred among all the reputed
                borewell Drilling Companies in Harda Urban & Rural Region.
              </Typography>
            </Grid>
          </Grid>

          {/* column two  */}
          <Grid
            width={{ xs: "100%", lg: "30%" }}
            textAlign={{ xs: "center", lg: "left" }}
            marginBottom={{ xs: 2, lg: 0 }}
          >
            <Grid item height={48}>
              <Typography variant="h6"> Quick Links </Typography>
            </Grid>
            <Grid item>
              <Typography>Home</Typography>
            </Grid>
          </Grid>

          {/* column three  */}
          <Grid
            width={{ xs: "100%", lg: "30%" }}
            textAlign={{ xs: "center", lg: "left" }}
            marginBottom={{ xs: 2, lg: 0 }}
          >
            <Grid item height={48}>
              <Typography variant="h6">Our Address</Typography>
            </Grid>
            <Grid item>
              <Box> +91 9009037793</Box>
              <Box> rohit@gmail.com</Box>
              <Box>Chhipaner road Harda, 461331</Box>
              <Box>Links</Box>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* second row */}
        <Grid
          item
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent={"space-between"}
          p={2}
          textAlign={{ xs: "center", lg: "left" }}
          // bgcolor={"#f75990"}
          className="bg-gradient-custom-theme1"
        >
          <Box>
            <Typography component="p">
              Copyrights © 2024. All Rights Reserved by Ganga Sagar Borewells
            </Typography>
          </Box>

          <Box>
            <Typography>Designed and Developed By Mayur Dogne</Typography>
          </Box>
          <Box>
            <Typography>Privacy Policy / Disclaimer</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
