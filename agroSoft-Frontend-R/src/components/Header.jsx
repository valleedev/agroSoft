const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-gray-600 hover:text-gray-900">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-gray-600">Resumen general del sistema</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-gray-100 border-0 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-green-500 focus:bg-white"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <i className="fas fa-bell text-xl"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;