//Header Component
import React from "react";
import "./Navbar.scss";
import NavItem from "../NavItem/NavItem";

import Menu from "@material-ui/core/Menu";
import MenutItem from "@material-ui/core/MenuItem";
import { Button, Select, MenuItem } from "@material-ui/core";
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from "react-router";

//Header Component
let Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

  const handleClose = () => {
    setAnchorEl(null);
  }

  const openMenu = (event) => {
    console.log("anchor")
    setAnchorEl(event.currentTarget);
  }

  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
  ]


  return <div >
    {/* <h1 className="Title">Project Macht</h1>
        <div className="Navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li className="#">Product</li>
                 Create Drop Down for product with BootStrap
                <li>Team</li>
                <li>Contact Us</li>
            </ul>
        </div> */}

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project Macht</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <NavItem data={"Home"} onClick={() => { history.push("./") }}></NavItem>
            <NavItem data={"About"}></NavItem>
            <NavItem data={"Product"} onClick={openMenu}></NavItem>
            {/* <Dropdown text='Product' id="drp" options={options} error /> */}
            <NavItem data={"Team"} onClick={() => { history.push("./teams") }}></NavItem>
            <NavItem data={"Contact Us"}></NavItem>


            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              variant="menu"
            >
              <MenutItem onClick={handleClose}>ProductC</MenutItem>
              <MenutItem onClick={handleClose}>ProductA</MenutItem>
              <MenutItem onClick={handleClose}>ProductB</MenutItem>

            </Menu>
          </ul>
        </div>
      </div>
    </nav>
  </div >
}

// Javascript code to  convert

// $( "li" ).hover(
//     function() {
//         $(this).find("span").stop().animate({
//         width:"100%",
//         opacity:"1",
//       }, 400, function () {
//       })
//     }, function() {
//         $(this).find("span").stop().animate({
//         width:"0%",
//         opacity:"0",
//       }, 400, function () {
//       })
//     }
//   );

export default Header;