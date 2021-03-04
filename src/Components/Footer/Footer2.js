import React from 'react';
import './Footer.css';

const FooterPage = (props) => {
    return (
        <div>
             <div className="footer-dark ">
        <footer>
            <div className="container-fluid" style={{height:380, marginTop:'60px'}}>
                <div className="row">
                <div className="col-md-4 item text">
                        <h3>Heading</h3>
                        <p style={{fontSize:12}}>TEXT</p>
                    </div>
                    <div className="col-md-4 item text">
                        <h3>Heading</h3>
                        <p style={{fontSize:12}}>TEXT TEXT</p>
                    </div>
                    <div className="col-md-4 item text">
                        <h3>Heading</h3>
                        <p style={{fontSize:12}}>TEXT</p>
                    </div>
                    
                    <div className="col-md-8 item text" style={{marginTop:'20px'}}>
                        <h3>Melophile</h3>
                        <p style={{fontSize:12}}>Brent ii  |  Bhoomi 2020  |  Viswasam  |  Love Marriage  |  Love Action Drama  |  Alludu Adurs  |  Kgf Chapter 1 (Kannada)  |  Praktan  |  G.O.A.T.  |  Triple Seat  |  Yuva Sarkar  |  Kati Jeher Hai  |  Champion  |  Adaraneeya Kathawak  |  THE FUTURE BITES</p>
                    </div>
                    <div className="col-sm-4 col-md-2 item"  style={{marginTop:'20px'}}>
                        <h3>More</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-2 item"  style={{marginTop:'20px'}}>
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col item social"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-twitter"></i></a><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-youtube"></i></a></div>
                </div>
                <p className="copyright">Project Macht © 2021</p>
            </div>
        </footer>
    </div>
        </div>
    );
}

export default FooterPage;