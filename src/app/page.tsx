"use client";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import ContactSection from "./components/ContactSection";
import KnowAboutBoreWell from "./components/KnowAboutBorewell";
// import ServiceGuaranteeSection from "./components/ServiceGuaranteeSection";
import { Button, CardMedia, Grid, Box, ThemeProvider } from "@mui/material";
import LazyLoad from "react-lazyload";
import borewellRepair from "./assets/borewellRepair.png";
import Image from "next/image";
import theme from "./utils/theme";
import ServiceSection from "./components/ServiceSection";

import HardaContractorSection from "./components/HardaContractorSection";
const headers = ["services", "contact us", "about us"];

// bg-gradient-to-br from-cyan-400 to-sky-50

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid className="bg-sky-100">
        <TopNav />

        <div className="bg-sky-100">
          <CardMedia
            component={"img"}
            src="/assets/borewellRepair.png"
            alt="alt tecxt"
            sx={{ objectFit: "fill", marginTop: 8 }}
          />
        </div>

        <LazyLoad height={100}>
          <Box className="bg-sky-100">
            <ContactSection />
          </Box>
        </LazyLoad>

        <LazyLoad height={100}>
          <ServiceSection />
        </LazyLoad>

        <LazyLoad height={100}>
          <KnowAboutBoreWell />
        </LazyLoad>

        <LazyLoad height={100}>
          <HardaContractorSection />
        </LazyLoad>

        {/* <LazyLoad height={100}>
          <ServiceGuaranteeSection />
        </LazyLoad> */}

        <LazyLoad height={100}>
          <Footer />
        </LazyLoad>
      </Grid>
    </ThemeProvider>
  );
}
