import { React, useState } from "react";
import './FormsPage.css';

const FormPage = () => {
  let [name, setName] = useState("");
  let [email, setMail] = useState("");
  let [desc, setDesc] = useState("");


  return (

    /*CHECK FOR REFERENCE  [VALIDATION AND RESPONSIVENESS REMAINIG]
    https://codepen.io/bobbykorec/pen/qOGbyr*/

    < div >
      <section id="contact">
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">

            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" onChange={(e) => { setName(e.target.value) }} required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" onChange={(e) => { setMail(e.target.value) }} required />
              </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required onChange={(e) => { setDesc(e.target.value) }}></textarea>

            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="button">
                <i className="fa fa-paper-plane"></i><span className="send-text" onClick={() => { console.log(name, email) }}>SEND</span>
              </div>

            </button>

          </form>

        </div>

      </section>
    </div >

  );
};


export default FormPage;