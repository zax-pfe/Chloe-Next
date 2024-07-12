"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import "../styles/drawer.css";
import NavLinks from "./navlinks";

import { useState } from "react";

import { IoIosMenu } from "react-icons/io";

// import Link from "next/link";
interface DrawerInterface {
  color: string;
}

export default function PhoneDrawer(props: DrawerInterface) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="drawer-container" onClick={toggleDrawer(false)}>
      {/* <a href="#home" className="link-items">
        About
      </a>
      <a href="#passions" className="link-items">
        Passions
      </a>
      <a href="#portfolio" className="link-items">
        Portfolio
      </a>
      <a href="#contact" className="link-items contact">
        Contact me
      </a> */}
      <NavLinks />
    </div>

    // <Box
    //   sx={{ width: 250 }}
    //   role="presentation"
    //   onClick={toggleDrawer(false)}
    // ></Box>
  );

  return (
    <div>
      <IoIosMenu size={40} color={props.color} onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
