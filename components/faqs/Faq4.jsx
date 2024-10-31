"use client";

import React, { useEffect } from "react";
import { Collapse } from 'bootstrap'; // Import Bootstrap Collapse directly

const faqData = [
  {
    id: 1,
    question: "What is hyper-targeted influence?",
    answer:
      "Hyper-targeted influence is about creating messages,ads, or content that feels deeply personal, as if we truly understand the individual we're targeting. The aim is to craft communications so precisely tailored that they connect on an instinctive level with the recipient.",
  },
  {
    id: 2,
    question: "How Kogenie use Generative ai?",
    answer:
      "KOgenie's Generative AI creates personalized texts and images tailored to an individual's preferences or to group - level data when specific information is unavailable. This allows us to craft highly relevant and resonant communications.",
  },
  {
    id: 3,
    question: "What kind of data does KOgenie use??",
    answer:
      "We use granular data, including individual-specific or demographic-level information, to ensure our messaging is as precise and relevant as possible. This data is the foundation for creating impactful and presonalized messages.",
  },
  {
    id: 4,
    question: "What is automated A/B testing?",
    answer:
      "Automated A/B testing is a critcial part of our stratergy. By continously testing and refining our advertisment, we ensure that they are optimized for the best possible results. This process helps us determine which variation of our advertisement performs best, allowing us to imporve effectiveness over time.",
  },
  {
    id: 5,
    question: "How can KOgenie help with branding and emotional influence?",
    answer:
      "KOgenie can craft advertisment that shift our reinforce opinions and evoke specific emotions. By alligning our content with emotions or opinions we aims to influence, we help you achieve your branding goal effectively.",
  },
];

const Faq4 = () => {
  useEffect(() => {
    // Initialize all collapsible elements within the accordion
    faqData.forEach((faq) => {
      const collapseElement = document.getElementById(`collapse${faq.id}`);
      if (collapseElement) {
        new Collapse(collapseElement, { toggle: false });
      }
    });
  }, []);

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={`heading${faq.id}`}>
            <button
              className={`accordion-button ${faq.id === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded={faq.id === 1 ? "true" : "false"}
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${faq.id}`}
            className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
            aria-labelledby={`heading${faq.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq4;
