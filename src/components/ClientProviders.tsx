"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import ScrollToTop from "./helper/scroll-to-top";

export default function ClientProviders() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}
