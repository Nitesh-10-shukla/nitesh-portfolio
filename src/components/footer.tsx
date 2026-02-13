// @flow strict
import CustomLink from "./ui/CustomLink";

// Inline SVG icons to keep footer out of react-icons bundle
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ForkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm12-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 8v3a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V8h-2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8H7z" />
  </svg>
);

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm">
            © Developer Portfolio by <CustomLink target="_blank" href="https://www.linkedin.com/in/nitesh-shukla-32a9051b6" className="text-[#16f2b3] underline decoration-[#16f2b3]/50 hover:decoration-[#16f2b3]">Nitesh Shukla</CustomLink>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <CustomLink
              target="_blank"
              href="https://github.com/Nitesh-10-shukla"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] hover:underline min-h-[44px]"
              aria-label="Star this project on GitHub"
            >
              <StarIcon />
              <span>Star</span>
            </CustomLink>
            <CustomLink
              target="_blank"
              href="https://github.com/Nitesh-10-shukla/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] hover:underline min-h-[44px]"
              aria-label="Fork this project on GitHub"
            >
              <ForkIcon />
              <span>Fork</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;