import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            <p className="mb-4">
              {personalData.description}
            </p>
            <p className="text-gray-300">
              I generally strive to keep up with the newest technologies and trends in the industry to ensure I can deliver the best results for my clients or employers.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-lg overflow-hidden border-2 border-[#2a2e5a] bg-[#0d1224]">
              <Image
                src={personalData.profile}
                width={280}
                height={280}
                alt="Nitesh Shukla"
                className="rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;