import React from "react";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  Hash,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
} from "lucide-react";

const EditorToolbar = () => {
  return (
    <div className="flex items-center gap-2 p-2 border-b border-gray-300">
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Bold className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Italic className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Underline className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Link2 className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Hash className="w-4 h-4" />
      </button>
      <div className="h-4 w-px bg-gray-300 mx-2" />
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <AlignLeft className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <AlignCenter className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <AlignRight className="w-4 h-4" />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <List className="w-4 h-4" />
      </button>
    </div>
  );
};

export default EditorToolbar;
