import React from "react";
import { Navbar, NavItem } from "react-materialize";

function Navigation() {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#">
          Logo
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/">Jeff Whitehead</NavItem>
      <NavItem href="components.html">About Me</NavItem>
      <NavItem href="components.html">Porfolio</NavItem>
      <NavItem href="components.html">Contact</NavItem>
    </Navbar>
  );
}

export default Navigation;