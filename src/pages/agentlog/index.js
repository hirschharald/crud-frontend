import React from "react";
import Navbar from "./../../components/Navbar";
import TableAgentlog from "./../../components/TableAgentlog";
import Footer from "./../../components/Footer";
import "./styles.scss";

function AgentlogPage(props) {
  return (
    <>
      <Navbar
        color="danger"
        logo="/images/logo.gif"
        headertext="Agentenstatistik"
      />
      <TableAgentlog />
      <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="Â© 2019 Vodafone/TKK"
      />
    </>
  );
}

export default AgentlogPage;
