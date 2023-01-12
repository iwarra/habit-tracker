import { Outlet } from "react-router-dom"
import Footer from "../compontents/Footer"

const RootLayout = () => {
  return (
          <>
            <Outlet />
            <Footer />
          </>
         )
};

export default RootLayout;
