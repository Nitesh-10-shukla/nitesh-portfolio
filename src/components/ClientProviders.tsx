"use client";
import dynamic from "next/dynamic";
import ScrollToTop from "./helper/scroll-to-top";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ScrollToTop />
      {children}
    </>
  );
}