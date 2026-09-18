import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const currentTime = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const templateParams = {
      name: form.current.name.value,
      reply_to: form.current.email.value,
      message: form.current.message.value,
      time: currentTime,
    };

    // Using your specific Service ID, Template ID, and Public Key
    emailjs.send(
      'service_6khk8k3', 
      'template_6buvdpq', 
      templateParams, 
      'TDZWEIL02dfn_c2HR' 
    )
    .then(() => {
      setIsSending(false);
      setStatus("success");
      e.target.reset(); 
      setTimeout(() => setStatus(""), 5000);
    })
    .catch((error) => {
      setIsSending(false);
      setStatus("error");
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">

          <div className="contact-header">
            <div className="contact-header-line left" />
            <h2 className="contact-heading">Let&apos;s Connect</h2>
            <div className="contact-header-line right" />
          </div>

          <p className="contact-subheading">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="contact-grid">

            {/* LEFT */}
            <div className="contact-left">
              <h3 className="contact-col-title">Get in Touch</h3>

              <a className="contact-card" href="mailto:bkishorkumar31@gmail.com">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="contact-card-text">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">bkishorkumar31@gmail.com</div>
                </div>
              </a>

              <a
                className="contact-card"
                href="https://www.linkedin.com/in/kishorkumar28/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="contact-card-text">
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">linkedin.com/in/kishorkumar28</div>
                </div>
              </a>

              <div className="contact-card" role="group" aria-label="Location">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="contact-card-text">
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">Salem, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="contact-right">
              <h3 className="contact-col-title">Send a Message</h3>

              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
                <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
                <textarea className="contact-textarea" name="message" placeholder="Your Message" required />

                <button className="contact-btn" type="submit" disabled={isSending}>
                  <span className="contact-btn-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p style={{ color: "#16a34a", marginTop: "10px", fontSize: "14px", textAlign: "center" }}>
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "#dc2626", marginTop: "10px", fontSize: "14px", textAlign: "center" }}>
                    Oops! Something went wrong.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-icons">
            {/* LinkedIn */}
            <a className="footer-icon-link" href="https://www.linkedin.com/in/kishorkumar28/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            {/* GitHub */}
            <a className="footer-icon-link" href="https://github.com/Kishor165" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Instagram */}
            <a className="footer-icon-link" href="https://www.instagram.com/kishxr_._/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            {/* Email */}
            <a className="footer-icon-link" href="mailto:bkishorkumar31@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}