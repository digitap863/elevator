import Footer from "../../components/user/shared/Footer.jsx";
import Navbar from "../../components/user/shared/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
