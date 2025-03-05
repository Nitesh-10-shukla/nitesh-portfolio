"use client";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { personalData } from "@/utils/data/personal-data";

function Resume() {
  const [useGoogleViewer, setUseGoogleViewer] = useState(false);

  useEffect(() => {
    // Some mobile browsers block embedded PDFs, so use Google Viewer if needed
    if (isMobile) {
      setUseGoogleViewer(true);
    }
  }, []);

  return (
    <div id="resume" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Resume
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Resume Display */}
      <div className="py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            {useGoogleViewer ? (
              // Google Docs Viewer for better mobile support
             personalData?.resume && <iframe
                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(personalData?.resume)}`}
                className="w-full h-[600px] lg:h-[800px] border-none"
                title="Resume"
              />
            ) : (
              // Regular embedded PDF for desktop
              <embed
                src={`${personalData?.resume}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                type="application/pdf"
                className="w-full h-[600px] lg:h-[800px] border-none"
              />
            )}
          </div>

          {/* Download Button */}
          <a
            href={personalData?.resume}
            download="Resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
