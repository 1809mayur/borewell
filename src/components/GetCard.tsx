import { Box, CardMedia, Typography } from "@mui/material";
import { availableServices } from "../app/utils/constants";

interface ServiceSectionCardProps {
  serviceIndex: number;
  focused: boolean;
}

export const GetCard = (props: ServiceSectionCardProps) => {
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
        {availableServices[props?.serviceIndex]?.title}
      </Typography>
    </Box>
  );
};

export default GetCard;
