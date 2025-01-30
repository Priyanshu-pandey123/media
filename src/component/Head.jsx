import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
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
