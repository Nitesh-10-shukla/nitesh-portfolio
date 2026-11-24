import ScrollProgress from "./helper/scroll-progress";
import ScrollToTop from "./helper/scroll-to-top";

/** Page-level chrome that sits outside the main content flow. */
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
      <ScrollToTop />
    </>
  );
}
