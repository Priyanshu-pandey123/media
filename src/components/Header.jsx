const Header = () => {
  return (
    <div className="bg-white px-8 py-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Thursday, 12 May</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
            Auto Questionnaire
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <span>+</span>
            <span>Add Job</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;