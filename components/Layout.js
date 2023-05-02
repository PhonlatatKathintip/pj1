import React from "react";
import Navbar from "./NavBar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
