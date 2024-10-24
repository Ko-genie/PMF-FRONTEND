"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import './globals.css';
import { Inter } from 'next/font/google';

// ES6 import for bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 1200,
      });
    }
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
};
