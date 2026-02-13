// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '@/assets/lottie/code.json';
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Experience section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        loading="lazy"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full max-w-md">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-[#2a2e5a]"></div>

              {experiences.map((experience) => (
                <div key={experience.id} className="relative pl-16 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[21px] top-6 w-5 h-5 bg-[#0d1224] border-[3px] border-violet-500 rounded-full z-10 group-hover:bg-violet-500 transition-colors duration-300"></div>

                  <GlowCard identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative bg-[#1b203e] bg-opacity-40 backdrop-blur-sm rounded-xl">
                      <Image
                        src="/blur-23.svg"
                        alt="Card background blur"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                        loading="lazy"
                        aria-hidden="true"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-300">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;