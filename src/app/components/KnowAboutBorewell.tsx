import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export const KnowAboutBoreWell = () => {
  return (
    <>
      <Grid
        padding={{ xs: 3, lg: "50px" }}
        className="bg-gradient-custom-theme2"
      >
        <Grid item height={"20%"} marginBottom={6}>
          <Typography variant="h5">Know About Ganga Sagar Borwell</Typography>
        </Grid>

        <Grid
          item
          display={{ xs: "block", lg: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"80%"}
        >
          <Box
            width={{ xs: "100%", lg: "60%" }}
            sx={{
              wordBreak: "break-all",
            }}
          >
            <Typography component="p">
              Ganga Sagar Borewells is known as one of the best borewell
              drilling contractors in Harda. We focus on providing all types of
              borewell solutions. We ensure customer satisfaction by providing
              services at affordable pricing. We provide the best borewell
              cleaning services in & around Harda for domestic, industrial and
              agricultural purposes. We are backed by highly qualified engineers
              who have extensive experience in borewell drilling. We deliver our
              work with the best suitable method depending on the surface &
              other geological aspects.
              <br />
              <Typography marginTop={3}>
                Ganga Sagar Borewells is expertise in the borewell industry for
                more than decades and has been serving largely in & around
                Harda. Ganga Sagar Borewells will always come forward to advise
                you regarding any kind of queries. The team of Ganga Sagar
                Borewells is well-driven, disciplined & experts in borewell
                drilling. We are known for providing quality service and
                finishing our work on time and we are proud to say that we are
                the best borewell drillers in Harda.
              </Typography>
            </Typography>
          </Box>
          <Box display={{ xs: "flex", lg: "block" }} justifyContent={"center"}>
            <CardMedia
              component={"img"}
              src="/assets/borwell04.png"
              sx={{
                width: "350px",
                height: "250px",
                objectFit: { xs: "scale-down", lg: "cover" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default KnowAboutBoreWell;
