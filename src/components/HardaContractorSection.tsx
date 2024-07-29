import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const HardaContractorSection = () => {
  const GetCardBoxes = () => {
    return (
      <Grid
        item
        className="bg-sky-100"
        sx={{
          width: "47%",
          height: 240,
          borderRadius: "0 28px 0 28px",
          padding: 3,
        }}
      >
        We are experienced professionals in all types of borewell drilling. We
        provide expert solutions by being available 24/7 for our clients. Ganga
        Sagar Borewells provides clients with extensive solutions for
        water-related problems with various services at a competitive price.
      </Grid>
    );
  };
  return (
    <>
      <Grid className="bg-sky-50" px={{ xs: "1rem", lg: "2rem" }}>
        <Grid item textAlign={"center"} py={4}>
          <Typography variant={"h5"}>
            Borewell Drilling Contractors in Harda
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            display={"flex"}
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent={"space-evenly"}
            my={2}
          >
            <Grid
              item
              className="bg-sky-100"
              sx={{
                width: { xs: "100%", lg: "47%" },
                height: 240,
                borderRadius: "0 28px 0 28px",
                marginBottom: { xs: 2, lg: 0 },
                padding: 3,
              }}
            >
              <Box display={"flex"} alignItems={"center"} height={"52px"}>
                <CardMedia
                  component={"img"}
                  src="assets/staff.png"
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                  alt="staff image icon"
                />
                <Typography
                  sx={{
                    color: "#1565c0",
                    // fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                  variant="h6"
                  mx={3}
                >
                  {" "}
                  Dedicated Staff
                </Typography>
              </Box>
              <Typography>
                Ganga Sagar Borewells team is an expert in the art and science
                of providing an unmatched solution to all water-related
                problems.
              </Typography>
            </Grid>
            <Grid
              item
              className="bg-sky-100"
              sx={{
                width: { xs: "100%", lg: "47%" },
                height: 240,
                borderRadius: "0 28px 0 28px",
                padding: 3,
                marginBottom: { xs: 2, lg: 0 },
                direction: { xs: "ltr", lg: "rtl" },
              }}
            >
              <Box display={"flex"} alignItems={"center"} height={"52px"}>
                <CardMedia
                  component={"img"}
                  src="assets/machine2.png"
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                  alt="machinery image icon"
                />
                <Typography
                  sx={{
                    color: "#1565c0",
                    // fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                  variant="h6"
                  mx={3}
                >
                  {" "}
                  Our Machinery
                </Typography>
              </Box>
              <Typography>
                Unit All over INDIA Hydraulic Super Rig is fitted with ELGI
                Compressor model 1150 - 300 with 300 psi fitted on PRD-2000mast
                limit. Pressure driven
              </Typography>
            </Grid>
          </Grid>

          <Box
            // className="bg-red-100"
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="bg-sky-100"
              sx={{
                position: "absolute",
                // zIndex: 100,
                height: 228,
                width: 228,
                borderRadius: "50%",
                border: "28px solid #bbdefb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>Brand</Box>
            </Box>
          </Box>

          <Grid
            display={"flex"}
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent={"space-evenly"}
          >
            <Grid
              item
              className="bg-sky-100"
              sx={{
                width: { xs: "100%", lg: "47%" },
                marginBottom: { xs: 2, lg: 0 },
                height: 240,
                borderRadius: "28px 0 28px 0",
                padding: 3,
              }}
            >
              <Box display={"flex"} alignItems={"center"} height={"72px"}>
                <CardMedia
                  component={"img"}
                  src="assets/object.png"
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                  alt="object image icon"
                />
                <Typography
                  sx={{
                    color: "#1565c0",
                    // fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                  variant="h6"
                  mx={3}
                >
                  {" "}
                  Our Objective
                </Typography>
              </Box>
              <Typography>
                {/* We are experienced professionals in all types of borewell
                drilling. We provide expert solutions by being available 24/7
                for our clients.  */}
                Ganga Sagar Borewells provides clients with extensive solutions
                for water-related problems with various services at a
                competitive price.
              </Typography>
            </Grid>
            <Grid
              item
              className="bg-sky-100"
              sx={{
                width: { xs: "100%", lg: "47%" },
                height: 240,
                borderRadius: "28px 0 28px 0",
                padding: 3,
                direction: { xs: "ltr", lg: "rtl" },
              }}
            >
              <Box display={"flex"} alignItems={"center"} height={"72px"}>
                <CardMedia
                  component={"img"}
                  src="assets/star.png"
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                  alt="star image icon"
                />
                <Typography
                  sx={{
                    color: "#1565c0",
                    // fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                  variant="h6"
                  mx={3}
                >
                  {" "}
                  Why Ganga Sagar Borewell
                </Typography>
              </Box>
              <Typography>
                Ganga Sagar Borewells works towards exceeding the expectations
                of our clients. We offer reliable borewell drilling services,
                which include all kinds of borewell work
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="bg-sky-50 h-24" />
      </Grid>
    </>
  );
};

export default HardaContractorSection;
