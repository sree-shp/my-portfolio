import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-wrapper">
        <div className="contact-column">
          <h2 className="contact-heading">CONTACT</h2>
          <p className="contact-description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible
          </p>
        </div>
        <div className="contact-column">
          <form className="contact-form">
            <label className="form-label">Name</label>
            <input className="form-input" type="text"></input>
            <br></br>
            <label className="form-label">Email</label>
            <input className="form-input" type="text"></input>
            <br></br>
            <label className="form-label">Message</label>
            <input className="form-input" type="text"></input>
            <br></br>
            <button className="send-button">SEND</button>
          </form>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Contact;
