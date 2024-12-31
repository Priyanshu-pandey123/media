import React from "react";
import { ArrowLeft } from "lucide-react";

const Head = () => {
  const handleBack = () => {
    // Handle back navigation
    console.log("Back clicked");
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center">
        <button
          onClick={handleBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Head;
