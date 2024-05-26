import "./App.css";
import Footer from "./layouts/admin/components/Footer";
import Header from "./layouts/admin/components/Header";
// import Navbar from './layouts/admin/components/Navbar'
// import Navbar from './layouts/staff/Navbar'
import Navbar from "./layouts/manager/Navbar";
import NavbarAdmin from "./layouts/staff/NavbarAdmin";
import RouterCom from "./routers/route";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdminNav = location.pathname.startsWith("/admin");

  return (
    <>
      <Header />
      {isAdminNav ? <NavbarAdmin /> : <Navbar />}
      <RouterCom />
      <Footer />
    </>
  );
}

export default App;
