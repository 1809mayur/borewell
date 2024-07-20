import React from "react";
import constants from "@/app/utils/constants";
import Link from "next/link";
import { Button, Grid, SpeedDial, SpeedDialAction } from "@mui/material";
import { Call, WhatsApp } from "@mui/icons-material";

function Deeplinking() {
  const whatsAppLink = `https://wa.me/${constants?.mobileNumber}?text=Hi%20I need to do borewell!`;
  const phoneDialLink = `tel:${constants?.mobileNumber}`;

  const actions = [
    { icon: <Call />, name: "Copy" },
    { icon: <Call />, name: "Save" },
    { icon: <Call />, name: "Print" },
    { icon: <Call />, name: "Share" },
  ];

  return (
    <Grid>
      <Link href={phoneDialLink} target="_blank" rel="noreferrer">
        <SpeedDial
          ariaLabel="SpeedDial for call Dialer"
          sx={{
            position: "fixed",
            bottom: 16,
            // right: 16,
            left: 16,
          }}
          icon={<Call />}
        />
      </Link>
      <Link href={whatsAppLink} target="_blank" rel="noreferrer">
        <SpeedDial
          ariaLabel="What's up messager"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            // left: 16,

            "& .MuiSpeedDial-fab": {
              backgroundColor: "green",
            },
          }}
          icon={<WhatsApp />}
        />
      </Link>
    </Grid>
  );
}

export default Deeplinking;
