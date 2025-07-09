import { Plus } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white px-10 py-7 border-b border-gray-100 flex items-center justify-between rounded-b-2xl shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800">Thursday, 12 May</h1>
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 border border-primary-600 text-primary-600 rounded-lg font-medium bg-white hover:bg-primary-50 transition-colors shadow-sm">
          Auto Questionnaire
        </button>
        <button className="px-5 py-2 bg-primary-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-sm hover:bg-primary-700 transition-colors">
          <Plus size={18} />
          Add Job
        </button>
      </div>
    </div>
  );
};

export default Header;
