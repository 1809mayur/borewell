"use client";
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <Grid
      minHeight={"75vh"}
      my={"64px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography component={"p"}>
        Service Page under Developement.Please click on the button to go to
        Homepage.
      </Typography>
      <Button
        sx={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
        variant="contained"
      >
        home
      </Button>
    </Grid>
  );
};

export default Services;
