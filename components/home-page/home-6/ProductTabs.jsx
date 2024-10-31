"use client"

import { useState } from "react";
import Image from "next/image";

const tabData = [
  {
    id: "sp1",
    title: "Input Audience Data",
    subtitle: "Select your target audience",
    image: "/images/media/img_06.jpg",
    width: 1214,
    height: 729,
  },
  {
    id: "sp2",
    title: "Review and Refine",
    subtitle: "A/B Testing optimizes for best possible outcomes",
    image: "/images/media/img_05.jpg",
    width: 1214,
    height: 729,
  },
  {
    id: "sp3",
    title: "Deploy and Monitor",
    subtitle: "Get analysis of insight in realtime",
    image: "/images/media/img_06.1.jpg",
    width: 1214,
    height: 730,
  },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("sp1");

  return (
    <>
      <ul className="nav nav-tabs d-block d-md-flex justify-content-between" role="tablist">
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block">{tab.subtitle}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content position-relative mt-120 lg-mt-80">
        {tabData.map((tab) => (
          <div
            className={`tab-pane ${tab.id === activeTab ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
          >
            <Image
              src={tab.image}
              alt="media"
              className="lazy-img main-screen w-100"
              width={tab.width}
              height={tab.height}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductTabs;
