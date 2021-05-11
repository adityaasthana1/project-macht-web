import { Container } from '@material-ui/core';
import React from 'react';
import { Image, Button, Card, CardGroup, CardDeck, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import FormsPage from './FormsPage.js';
import FooterPage from '../Footer/Footer2.js';
import SimpleMap from '../Maps/Maps.js';
import CustomFooter from '../Footer/CustomFooter.js';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className="ContactHeaderImg">
                <img src="https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2FofficeCar.jpg?alt=media&token=4391bb71-f32f-42ee-b9b6-d8f51566209b" />
            </div>
            <br></br>
            <div>
                <h1 className="exlarge" style={{ color: "white", textAlign: 'center' }}>Connect with our office</h1>
            </div>

            <br></br><br></br><br></br>

            {/*Map + Image*/}


            <Container>
                <div class="row" style={{ color: "white" }}>
                    <div class="col-lg-6  thumb">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58688.52838182055!2d75.76220088776722!3d23.168994778917625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1619427995525!5m2!1sen!2sin" width="600px" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="col-lg-6 "><h4>
                        Portsmouth, NH (U.S. Office)<br></br>
                                                    Address<br></br></h4>
                                                    1 Harbour Pl, Suite 175<br></br>
                                                    Portsmouth, NH 03801<br></br>
                                                    United States<br></br>

                                                    Phone<br></br>
                                                    1 888 HUBSPOT<br></br>

                    </div>
                </div>
            </Container>



            <FormsPage />
            {/* <FooterPage /> */}
            <CustomFooter></CustomFooter>
        </div>

    );
}

const Contactus = () => {
    return ContactPage();
}

export default Contactus;