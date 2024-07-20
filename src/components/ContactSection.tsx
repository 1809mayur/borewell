import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { availableServices } from "../app/utils/constants";

interface ContactFormType {
  fullName?: string;
  mobileNumber?: string;
  address?: string;
  pincode?: string;
  serviceRequest: string;
}

export const ContactSection = () => {
  const [contactForm, setContactForm] = useState<ContactFormType>({
    serviceRequest: "select service",
  });
  const [isMobileNumberError, setIsMobileNumberError] = useState(false);
  const [isPincodeError, setIsPincodeError] = useState(false);

  const mobileNumberValidator = (mobile: string) => {
    setContactForm({ ...contactForm, mobileNumber: mobile });
    setIsMobileNumberError(true);
    if (mobile && mobile?.length === 10) setIsMobileNumberError(false);
  };

  const pincodeValidator = (pincodeValue: string) => {
    setContactForm({ ...contactForm, pincode: pincodeValue });
    setIsPincodeError(true);

    if (pincodeValue && pincodeValue?.length == 6) setIsPincodeError(false);
  };

  const contactFormHandler = () => {
    if (!isPincodeError && !isMobileNumberError) {
      console.log("make an api call or submit this data to data base");
    }
    console.log(contactForm);
  };

  return (
    <Grid className="bg-sky-100 ">
      <Typography className="text-center my-2" variant="h5">
        {" "}
        Book a site visit{" "}
      </Typography>

      <Grid
        item
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ xs: "center", lg: "space-evenly" }}
      >
        <TextField
          className="my-2"
          id="full-name"
          size={"small"}
          onChange={(event) =>
            setContactForm({ ...contactForm, fullName: event.target.value })
          }
          label="Full Name"
          variant="outlined"
          sx={{ width: { xs: "80%", lg: "18%" } }}
        />

        <TextField
          id="address"
          className="my-2"
          size={"small"}
          onChange={(event) =>
            setContactForm({ ...contactForm, address: event.target.value })
          }
          label="Address"
          variant="outlined"
          sx={{ width: { xs: "80%", lg: "18%" } }}
        />

        <TextField
          id="pincode"
          className="my-2"
          size={"small"}
          onChange={(event) => pincodeValidator(event.target.value)}
          label="Pincode"
          variant="outlined"
          error={isPincodeError}
          helperText={isPincodeError ? "Incorrect Pincode" : ""}
          sx={{ width: { xs: "80%", lg: "18%" } }}
        />

        <TextField
          id="mobile-number"
          size={"small"}
          className="my-2"
          onChange={(event) => mobileNumberValidator(event.target.value)}
          label="Mobile Number"
          variant="outlined"
          error={isMobileNumberError}
          helperText={isMobileNumberError ? "Incorrect Number" : ""}
          sx={{ width: { xs: "80%", lg: "18%" } }}
        />

        <Select
          className="my-2"
          value={contactForm?.serviceRequest}
          onChange={(event) =>
            setContactForm({
              ...contactForm,
              serviceRequest: event.target.value as string,
            })
          }
          variant="outlined"
          sx={{ width: { xs: "80%", lg: "18%" } }}
          size={"small"}
          label="Select Service"
        >
          {availableServices.map((service: any, index: number) => {
            return (
              <MenuItem key={index} value={service}>
                {" "}
                {service?.title}{" "}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Box className="text-center mt-2">
        <Button onClick={contactFormHandler} variant="contained">
          {" "}
          Request{" "}
        </Button>
      </Box>
    </Grid>
  );
};

export default ContactSection;
