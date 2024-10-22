"use client";
import { useEffect, useState } from "react";
import { Grid, Box, Typography, Button, CardMedia } from "@mui/material";
import { availableServices } from "../app/utils/constants";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import useTheme from "@mui/material/styles/useTheme";
// import GetCard from "./GetCard";

interface ServiceSectionCardProps {
  serviceIndex: number;
  focused: boolean;
}

const ServiceSection = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const availableServicesLength: number = availableServices?.length - 1;

  const theme = useTheme();
  useEffect(() => {
    if (selectedServiceIndex < 0) {
      setSelectedServiceIndex(0);
    }
  }, [selectedServiceIndex]);

  const GetCard = (props: ServiceSectionCardProps) => {
    return (
      <Box
        className="bg-sky-100"
        sx={{
          height: { sm: "200px", md: "250px" },
          width: {
            xs: "300px",
            md: "348px",
            lg: props?.focused ? "348px" : "300px",
          },
          //   backgroundColor: props?.focused ? "darkgray" : "lightgray",
          filter: props?.focused ? "null" : "blur(1px)",
          //   transition: "all 3s ease-in-out",
        }}
      >
        <CardMedia
          component="img"
          src={availableServices[props?.serviceIndex]?.imageUrl}
          alt={availableServices[props?.serviceIndex].title}
          sx={{
            height: { xs: 200, md: 250, lg: 250 },
            width: { xs: 300, md: 348, lg: 348 },
          }}
        />
        <Typography className="text-center">
          {availableServices[props?.serviceIndex].title}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Grid id="service-section" className="bg-sky-50">
        {/* Service Header */}
        <Box>
          {" "}
          <Typography className="text-center my-4 pt-1" variant="h5">
            {" "}
            Services Available{" "}
          </Typography>{" "}
        </Box>

        {/* Service Cards */}
        <Grid
          item
          display={"flex"}
          height={348}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {/* Left Service Card when screen size is greater than laptop: 1024px */}
          <Box display={{ lg: "block", xs: "none" }}>
            {selectedServiceIndex === 0 ? (
              <GetCard serviceIndex={availableServicesLength} focused={false} />
            ) : (
              <GetCard
                serviceIndex={selectedServiceIndex - 1}
                focused={false}
              />
            )}
          </Box>

          {/* Left Icon to change service card with next Card(smaller screens < 1024 px) */}
          <Box display={{ lg: "none", xs: "block" }}>
            <ArrowCircleLeftOutlinedIcon
              sx={{
                position: "absolute",
                left: "2rem",
                color: theme.palette.primary.main,
              }}
              onClick={() =>
                setSelectedServiceIndex(
                  selectedServiceIndex === 0
                    ? availableServicesLength
                    : selectedServiceIndex - 1
                )
              }
            />
          </Box>

          {/* Center Service Card */}
          <Box>
            <GetCard serviceIndex={selectedServiceIndex} focused={true} />
          </Box>

          {/* Right Icon to change service card with next Card(smaller screens < 1024px)  */}
          <Box display={{ lg: "none", xs: "block" }}>
            {" "}
            <ArrowCircleRightOutlinedIcon
              sx={{
                position: "absolute",
                right: "2rem",
                color: theme.palette.primary.main,
              }}
              onClick={() =>
                setSelectedServiceIndex(
                  selectedServiceIndex === availableServicesLength
                    ? 0
                    : selectedServiceIndex + 1
                )
              }
            />
          </Box>

          {/* Right Service Card when screen size is greater than laptop: 1024 */}
          <Box display={{ lg: "block", xs: "none" }}>
            {selectedServiceIndex === availableServicesLength ? (
              <GetCard serviceIndex={0} focused={false} />
            ) : (
              <GetCard
                serviceIndex={selectedServiceIndex + 1}
                focused={false}
              />
            )}
          </Box>
        </Grid>

        {/* row of buttons for service navigation */}
        <Grid
          item
          className="text-center"
          display={{ xs: "none", lg: "block" }}
        >
          {availableServices.map((service, index: number) => {
            return (
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  display: "inline-block",
                  //   backgroundColor: "lightgray",
                  //   "&:hover": {
                  //     backgroundColor: "gray",
                  //   },
                }}
                key={index}
              >
                <Box
                  sx={{
                    height: "10%",
                    width: "40%",
                    backgroundColor:
                      selectedServiceIndex === index ? "gray" : "lightgray",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedServiceIndex(index)}
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
