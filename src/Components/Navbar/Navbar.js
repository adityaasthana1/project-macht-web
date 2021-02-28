//Header Component
import React from "react";
import "./Navbar.scss";


//Header Component
let Header = () => {
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

<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>

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
      <li><a href="#">Home</a><span class="hover"></span></li>
      <li><a href="#">About</a><span class="hover"></span></li>
      <li><a href="#">Product</a><span class="hover"></span></li>
      <li><a href="#">Team</a><span class="hover"></span></li>
      <li><a href="#">Contact Us</a><span class="hover"></span></li>
    </ul>
  </div>
  </div>
</nav>
    </div>
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