// @flow strict

import { skillsData } from "@/utils/data/skills";
import { getSkillImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const categories = {
  Frontend: ["HTML", "CSS", "Javascript", "Typescript", "React", "React Native", "Next JS", "TailwindCSS", "Bootstrap", "Figma", "MaterialUI", "Redux", "Context API"],
  Backend: ["NodeJS", "Express", "NestJS", "GraphQL", "Apollo Client", "Java", "Python"],
  Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  DevOps: ["Git", "AWS", "Docker", "CI/CD", "Nginx", "Azure", "Stripe", "JWT", "OAuth2.0"]
};

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-4 lg:px-0 my-12">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category} className="bg-[#0d1224] border border-[#2a2e5a] p-6 rounded-xl relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-violet-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6 text-center uppercase tracking-widest text-[#16f2b3]">{category}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skillsData
                  .filter(skill => skills.includes(skill.name))
                  .map((skill, id) => (
                    <div className="w-fit flex items-center gap-2 transition-all duration-300 transform hover:scale-110 cursor-pointer bg-[#11152c] border border-[#2a2e5a] px-3 py-2 rounded-lg hover:border-violet-500" key={id}>
                      <div className="h-6 w-6 relative">
                        <Image
                          src={getSkillImage(skill?.icon)}
                          alt={skill?.name}
                          fill
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                      <p className="text-white text-sm">
                        {skill?.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
        {/* Marquee for remaining/all skills or just as a decorative element */}
        <div className="col-span-1 md:col-span-2 mt-8">
          <h3 className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">Everything Else</h3>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsData.map((skill, id) => (
              <div className="w-28 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-2 rounded-lg group relative cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] p-2 hover:border-violet-500 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={getSkillImage(skill?.icon)}
                      alt={skill?.name}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded"
                    />
                    <p className="text-white text-xs">{skill?.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;