"use client";

import dynamic from "next/dynamic";
import ScrollToTop from "./helper/scroll-to-top";

// Lazy load ToastContainer since it's rarely needed on first render
const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => ({ default: mod.ToastContainer })),
  { ssr: false }
);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      {children}
      <ScrollToTop />
    </>
  );
}
