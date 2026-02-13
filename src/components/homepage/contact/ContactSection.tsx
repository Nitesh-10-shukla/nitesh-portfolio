// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="flex flex-col items-center justify-center w-full relative z-10">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 translate-x-1/2 filter blur-3xl opacity-20"></div>

        <h2 className="font-bold text-2xl lg:text-4xl text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl text-center mb-12">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Email Card */}
          <div className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-violet-600 hover:to-pink-600 transition-all duration-500">
            <div className="bg-[#0d1224] h-full rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/20 rounded-bl-full -mr-4 -mt-4 transition-all duration-500 group-hover:bg-violet-500/40"></div>
              <div className="p-4 bg-gray-800/50 rounded-full text-[#16f2b3] group-hover:scale-110 transition-transform duration-300">
                <MdAlternateEmail size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
              <p className="text-gray-300 text-sm text-center">{personalData.email}</p>
              <Link
                href={`mailto:${personalData.email}`}
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                Send Email
              </Link>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-pink-500 hover:to-violet-600 transition-all duration-500">
            <div className="bg-[#0d1224] h-full rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-full -mr-4 -mt-4 transition-all duration-500 group-hover:bg-blue-500/40"></div>
              <div className="p-4 bg-gray-800/50 rounded-full text-[#16f2b3] group-hover:scale-110 transition-transform duration-300">
                <IoMdCall size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Phone</h3>
              <p className="text-gray-300 text-sm text-center">{personalData.phone}</p>
              <Link
                href={`tel:${personalData.phone}`}
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs lg:text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Call Now
              </Link>
            </div>
          </div>

          {/* Address Card */}
          <div className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 hover:from-violet-600 hover:to-pink-600 transition-all duration-500">
            <div className="bg-[#0d1224] h-full rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-bl-full -mr-4 -mt-4 transition-all duration-500 group-hover:bg-emerald-500/40"></div>
              <div className="p-4 bg-gray-800/50 rounded-full text-[#16f2b3] group-hover:scale-110 transition-transform duration-300">
                <CiLocationOn size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Address</h3>
              <p className="text-gray-300 text-sm text-center">{personalData.address}</p>
              <div className="mt-2 px-6 py-2 opacity-0">Placeholder</div> {/* Spacer to match height */}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 flex items-center gap-6 lg:gap-10">
          <Link target="_blank" href={personalData.github}
            className="bg-[#8b98a5] p-4 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          >
            <IoLogoGithub size={32} />
          </Link>
          <Link target="_blank" href={personalData.linkedIn}
            className="bg-[#8b98a5] p-4 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          >
            <BiLogoLinkedin size={32} />
          </Link>
          <Link target="_blank" href={personalData.twitter}
            className="bg-[#8b98a5] p-4 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          >
            <FaXTwitter size={32} />
          </Link>
          <Link target="_blank" href={personalData.facebook}
            className="bg-[#8b98a5] p-4 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          >
            <FaFacebook size={32} />
          </Link>
          <Link target="_blank" href={personalData.instagram}
            className="bg-[#8b98a5] p-4 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          >
            <CiInstagram size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;