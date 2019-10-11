import React from "react";
import Navbar from "./../../components/Navbar";
import TableRufnummern from "./../../components/TableRufnummern";
import Footer from "./../../components/Footer";
import "./styles.scss";

function RufnummernPage(props) {
  return (
    <>
      <Navbar
        color="danger"
        logo="/images/logo.gif"
        headertext="Rufnummern"
      />
      <TableRufnummern />
      <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="Â© 2019 Vodafone/TKK"
      />
    </>
  );
}

export default RufnummernPage;
