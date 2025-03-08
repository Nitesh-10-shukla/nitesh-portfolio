"use client"; 

import { useState } from "react";
import { motion } from "framer-motion";
import { BiRefresh } from "react-icons/bi"; 

const FallbackComponent: React.FC = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      window.location.reload(); 
    }, 1000);
  };

  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 text-center border border-red-500/20"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-4"
        >
          <svg
            className="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <h2 className="text-2xl font-bold text-white mb-2">Oops! Something Went Wrong</h2>
        <p className="text-gray-400 mb-6">
          We encountered an issue loading this section. Please try refreshing the page.
        </p>

        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className={`flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium uppercase tracking-wider transition-all duration-300 ease-out ${
            isRetrying ? "opacity-50 cursor-not-allowed" : "hover:from-red-600 hover:to-pink-700"
          }`}
        >
          {isRetrying ? (
            <>
              <span>Retrying...</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <BiRefresh size={20} />
              </motion.span>
            </>
          ) : (
            <>
              <span>Retry</span>
              <BiRefresh size={20} />
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default FallbackComponent;