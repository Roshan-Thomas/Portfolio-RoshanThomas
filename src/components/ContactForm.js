import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
          mattis sagittis.
        </p>
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <button
                type="submit"
                className="button primary"
              >
                Send Message
              </button>
          {/* <ul className="actions">
            <li>
              <button
                type="submit"
                className="button primary"
              >
                Send Message
              </button>
            </li>
          </ul> */}
        </form>
      </div>
    </>
  );
}
