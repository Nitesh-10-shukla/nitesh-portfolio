// @flow strict
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import CustomLink from "./ui/CustomLink";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <CustomLink target="_blank" href="https://www.linkedin.com/in/nitesh-shukla-32a9051b6" className="text-[#16f2b3]">Nitesh Shukla</CustomLink>
          </p>
          <div className="flex items-center gap-5">
            <CustomLink
              target="_blank"
              href="https://github.com/Nitesh-10-shukla"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </CustomLink>
            <CustomLink
              target="_blank"
              href="https://github.com/Nitesh-10-shukla/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;