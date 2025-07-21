import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { FooterProvider } from '../context/FooterContext'

const RootLayout = () => {
  return (
    <>
      <FooterProvider>
        <Outlet />
        <Footer />
      </FooterProvider>
    </>
  )
}

export default RootLayout
