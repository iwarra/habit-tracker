import { Outlet } from "react-router-dom"
import Footer from "../compontents/Footer"
import { FooterProvider } from "../context/FooterContext";

const RootLayout = () => {
  
  return (
          <>
          <FooterProvider>
            <Outlet />
            <Footer />
          </FooterProvider>
          </>
         )
};

export default RootLayout;
