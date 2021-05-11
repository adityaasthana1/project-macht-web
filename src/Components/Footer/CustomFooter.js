import './CustomFooter.css';
import graph from "../../Img/macht-logo.png"
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

let CustomFooter = (props) => {
    return <div className="CustomFooter">
        <div className="FooterUp">
            <div className="FooterLogo">
                <div className="FooterLogoHolder">
                    <img src={graph} className="FooterImg" alt="Macht" />
                    {/* <h2>Macht</h2> */}
                </div>
            </div>

            <div className="FooterProducts">
                <h3>Products</h3>
                <Link to="/product-Wally">Wally</Link>
                <Link to="/product-Amanda">Amanda</Link>
                <Link to="/product-Amanda">Wally</Link>
            </div>

            <div className="AboutUs">
                <h3>About US</h3>
                <Link to="/teams">Out Members</Link>
                <Link to="/teams">Contact US</Link>
            </div>
        </div>

        <div className="FooterDown">
            <div className="FooterCopyright">
                <p>Project Macht © 2021</p>
            </div>

            <div className="FooterSocial">
                <span className="toLeft"></span>
                <a href="#"><AiFillFacebook></AiFillFacebook></a>
                <a href="#"><AiFillLinkedin></AiFillLinkedin></a>
                <a href="#"><AiFillInstagram></AiFillInstagram></a>


            </div>
        </div>
    </div>
}

export default CustomFooter;