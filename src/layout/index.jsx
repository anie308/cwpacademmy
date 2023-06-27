import Navbar from "../components/global/navbar";
import Footer from "../components/global/footer";
import TopNav from "../components/global/topnav";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
