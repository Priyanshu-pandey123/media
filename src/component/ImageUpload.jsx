import React, { useRef } from "react";
import { ImagePlus, Plus } from "lucide-react";

const ImageUpload = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageSelect(e.target.files);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-black rounded-lg px-12 py-14 text-center bg-gray-50 cursor-pointer hover:bg-gray-100"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <button
        type="button"
        className="mx-auto flex flex-col items-center text-gray-400 hover:text-gray-500"
      >
        <Plus className="w-8 h-8 mb-2" />
        <span>Add Post Images</span>
      </button>
    </div>
  );
};

export default ImageUpload;
