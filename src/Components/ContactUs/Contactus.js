import { Container } from '@material-ui/core';
import React from 'react';
import { Image, Button, Card, CardGroup, CardDeck, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import FormsPage from './FormsPage.js';
import FooterPage from '../Footer/Footer2.js';

const Contactus = () => {
    return (
        <div>
            <Navbar />
            <Image src="./images/work.jpg" style={{ width: "100%", height: "460px" }} fluid />
            <Container>
            <div class="row">
                <CardDeck style={{ marginTop: '-60px' }}>
                    <Card>
                        <div class="col-lg-4 col-md-4 col-xs-4 thumb">
                            <Card.Img variant="top" src="./images/off.jpg" style={{ width: "500px", height: "250px" }} />

                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural
                                 </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </div>
                    </Card>
                    <Card>
                        <div class="col-lg-4 col-md-4 col-xs-4 thumb">
                            <Card.Img variant="top" src="./images/off.jpg" style={{ width: "500px", height: "250px" }} />

                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                     content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </div>
                    </Card>
                </CardDeck>
            </div>
            </Container>
            <br></br>
            <div>
                <h1 className="exlarge" style={{ color: "white", textAlign: 'center' }}>Connect with our office</h1>
            </div>
            
            <br></br><br></br><br></br>

            {/*Map + Image*/}

            <Container>
                <Row style={{ color: "white"}}>
                    <Col style={{fontSize:"30px"}} xs={6}>This grid is for map </Col>
                    <Col xs={6}>This grid is for image and info as overlay. After setting image both will divide horizontally in 6:6 ratio</Col>
                </Row>
            </Container>
            <br></br><br></br><br></br>
            <Container>
            <div class="row" style={{ color: "white" }}>
            <div class="col-lg-6  thumb">
                  <Image src="./images/s.jpg" style={{ width: "550px", height: "300px" }} />
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



<FormsPage/>
<FooterPage/>
</div>

    );
}

export default Contactus;