import React from "react";
import Navbar from "./../../components/Navbar";
import TableMandanten from "./../../components/TableMandanten";
import Footer from "./../../components/Footer";
import "./styles.scss";

function MandantenPage(props) {
  return (
    <>
      <Navbar
        color="danger"
        logo="/images/logo.gif"
        headertext="Mandanten"
      />
      <TableMandanten />
      <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="Â© 2019 Vodafone/TKK"
      />
    </>
  );
}

export default MandantenPage;
