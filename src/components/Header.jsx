import { Plus } from "lucide-react";

const Header = () => {
  return (
    <div className="  flex items-center justify-between ">
      <h1 className="text-2xl font-semibold text-gray-800">Thursday, 12 May</h1>
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 border-2 text-blue-600  border-blue-600 text-primary-600 rounded-lg font-medium bg-white hover:bg-primary-50 transition-colors shadow-sm">
          Auto Questionnaire
        </button>
        <button className="px-5 py-2 bg-primary-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-sm bg-blue-600">
          <Plus size={18} />
          Add Job
        </button>
      </div>
    </div>
  );
};

export default Header;
