import { ComponentProps } from "react";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

interface MainLayoutProps {
  children: ComponentProps<any>;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <TopNav />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
