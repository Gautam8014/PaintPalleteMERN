import React from 'react'
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please feel free to contact us.</p>

        <div className="contact-info">
          <h2>Gallery Information</h2>
          <p>
            Address: 123 Art Street<br />
            City: Artville<br />
            Phone: (555) 123-4567<br />
            Email: info@artgallery.com
          </p>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
