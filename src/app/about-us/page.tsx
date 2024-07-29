"use client";

import React from "react";
import { Typography, Grid, Box, Divider } from "@mui/material";
import constants from "../utils/constants";
const About = () => {
  return (
    <Grid
      sx={
        {
          // minHeight: "80vh",
        }
      }
    >
      <Grid item textAlign={"center"} mt={10} mb={2}>
        <Typography variant="h4" sx={{ color: "purple" }}>
          {" "}
          About Us
        </Typography>
      </Grid>

      <Grid
        item
        className="bg-sky-100"
        sx={{
          display: { xs: "block", lg: "flex" },
          justifyContent: "space-between",
          minHeight: { lg: "40vh" },
          alignItems: "center",
          borderRadius: "8px",
          px: { xs: 0, lg: "100px" },
          py: { xs: 4, lg: 0 },
          mx: { xs: 0, lg: "20%" },
          marginBottom: "16px",
          textAlign: { xs: "center", lg: "start" },
        }}
        width={{ xs: "100%", lg: "66%" }}
      >
        <Box>
          <Box>
            <Typography variant="h6"> DETAILS </Typography>
          </Box>
          <Box>
            <Typography>Name: Rohit Jat S/O Suresh Jat </Typography>
            <Typography> Gmail: borwell@shrigangasagar.com </Typography>

            <Typography>Number: (+91) {constants.mobileNumber}</Typography>
          </Box>
        </Box>

        <Divider
          sx={{
            height: { xs: "1px", lg: "30vh" },
            border: "1px solid #bbdefb",
            my: { xs: "16px", lg: 0 },
          }}
        />

        <Box>
          <Box>
            <Typography variant="h6"> ADDRESS </Typography>
          </Box>
          <Box>
            <Typography>Chhinaper road, Harda</Typography>
            <Typography>Madhya Pradesh, 461331</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
