import { useState, useEffect } from "react";

const SuccessAlert = ({ onClose }) => (
  <div className="left-0 right-0 z-10 flex flex-auto justify-center px-4">
    <div
      className="relative mb-4 rounded-lg border border-green-400 bg-green-100 px-4 py-2 text-green-700 shadow-md"
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-xs font-semibold md:text-sm lg:text-base">
            Success!
          </p>
        </div>
        <button
          type="button"
          className="text-xs text-green-400 hover:text-green-600 focus:text-green-600 focus:outline-none md:text-sm"
          onClick={onClose}
        >
          <svg
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <p className="text-xs md:text-sm lg:text-base">
        Your message has been sent successfully!
      </p>
    </div>
  </div>
);

export default SuccessAlert;
