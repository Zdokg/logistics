import React from 'react';
import QuoteHeader from './HeaderQ';
import QuoteForm from './QuoteForm';
import './Quote.css';

const Quote = () => {
  return (
    <div className="quote-page">
      <div className="background-gradient" />

      <main className="main-container">
        <QuoteHeader />
        <QuoteForm />

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="section-title">What Our Clients Say</h2>

          <div className="testimonials-grid">
            {[
              {
                text: "The quote process was incredibly smooth. We received our quote within hours and it was very competitive.",
                name: "John Smith",
                title: "CEO, TechCorp",
              },
              {
                text: "Their attention to detail when quoting complex international shipments is exceptional. They consider everything.",
                name: "Sarah Johnson",
                title: "Import Manager, GlobalTrade",
              },
              {
                text: "We've tried several logistics providers, but the transparency and accuracy of their quotes keep us coming back.",
                name: "Michael Wong",
                title: "Operations Director, Retail Solutions",
              },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="star-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {[
              {
                q: "How long does it take to receive a quote?",
                a: "In most cases, you'll receive a quote within 2-4 business hours after submitting your request. For complex shipments or unusual destinations, it may take up to 24 hours.",
              },
              {
                q: "What information do I need to provide for an accurate quote?",
                a: "For the most accurate quote, we need the origin and destination locations, cargo details (weight, dimensions, type), desired delivery timeline, and any special handling requirements.",
              },
              {
                q: "Are there any hidden fees in your quotes?",
                a: "No, our quotes are transparent and include all standard fees. We clearly outline any potential additional charges that may apply under specific circumstances.",
              },
              {
                q: "How long is my quote valid for?",
                a: "Standard quotes are valid for 7 days from issuance. Market conditions and fuel prices can affect shipping rates, so we provide a validity period to ensure fairness.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-card">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quote;
