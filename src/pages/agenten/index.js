import React from "react";
import Navbar from "./../../components/Navbar";
import TableAgenten from "./../../components/TableAgenten";
import Footer from "./../../components/Footer";
import "./styles.scss";

function AgentenPage(props) {
  return (
    <>
      <Navbar
        color="danger"
        logo="/images/logo.gif"
        headertext="Agenten"
      />
      <TableAgenten />
      <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="Â© 2019 Vodafone/TKK"
      />
    </>
  );
}

export default AgentenPage;
