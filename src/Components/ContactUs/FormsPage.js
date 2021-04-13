import React from "react";
import './FormsPage.css';

const FormPage = () => {
  return (
    
    /*CHECK FOR REFERENCE  [VALIDATION AND RESPONSIVENESS REMAINIG]
    https://codepen.io/bobbykorec/pen/qOGbyr*/

    < div >
    <section id="contact">
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">

          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required />
            </div>
          </div>

          <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>

          </button>

        </form>

      </div>

    </section>  
  </div >

  );
};


export default FormPage;