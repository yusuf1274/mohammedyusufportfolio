import React, { useState } from 'react';

const CONTACT_ITEMS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'mohammedyusuf@email.com',
    href: 'mailto:mohammedyusuf@email.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Madurai, Tamil Nadu, India',
    href: null,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohammedyusuf',
    href: 'https://linkedin.com/in/mohammedyusuf',
  },
  {
    icon: '⌨️',
    label: 'GitHub',
    value: 'github.com/mohammedyusuf',
    href: 'https://github.com/mohammedyusuf',
  },
];

const ContactSection = () => {
  const [form,      setForm]      = useState({ name: '', email: '', subject: '', message: '' });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Name is required';
    if (!form.email.trim())   errs.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email format';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4500);
    }, 1500);
  };

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-fade-up">
          <span className="section-badge">📬 Get In Touch</span>
          <h2 id="contact-heading" className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to say hi?
            I'd love to hear from you. Let's build something great together!
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left: Info Panel */}
          <div className="contact-info">
            <div>
              <h3 className="contact-headline">Let's work together ✦</h3>
              <p className="contact-tagline">
                I'm currently open to freelance projects and full-time opportunities.
                Whether you need a landing page, a full-stack web app, or a
                technical consultation — I'm here for it.
              </p>
            </div>

            {/* Contact Items */}
            <div className="contact-items-list" role="list" aria-label="Contact information">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} role="listitem">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-item"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      <div className="contact-item__icon" aria-hidden="true">{item.icon}</div>
                      <div>
                        <p className="contact-item__label">{item.label}</p>
                        <p className="contact-item__value">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-item" aria-label={`${item.label}: ${item.value}`}>
                      <div className="contact-item__icon" aria-hidden="true">{item.icon}</div>
                      <div>
                        <p className="contact-item__label">{item.label}</p>
                        <p className="contact-item__value">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="availability-badge">
              <span className="availability-badge__dot" aria-hidden="true" />
              <span className="availability-badge__text">Available for new opportunities</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Mohammed Yusuf"
                    value={form.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Project Inquiry / Job Offer / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="form-btn"
                disabled={loading}
                aria-busy={loading}
                aria-label={loading ? 'Sending message...' : 'Send message'}
              >
                {loading ? (
                  <>
                    <span className="spin" aria-hidden="true">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="form-success" role="status" aria-live="polite">
                  🎉 Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
