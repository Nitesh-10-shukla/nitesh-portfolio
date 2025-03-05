"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./helper/scroll-to-top"), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}
