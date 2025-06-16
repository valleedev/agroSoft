import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 

const navItems = [
  { icon: 'fa-home', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-users', label: 'Colaboradores', path: '/collaborators' },
  { icon: 'fa-tools', label: 'Herramientas', path: '/tools' },
  { icon: 'fa-leaf', label: 'Control Siembra', path: '/siembra' },
  { icon: 'fa-bell', label: 'Notificaciones', path: '/notificaciones', badge: 0 },
  { icon: 'fa-chart-bar', label: 'Informes', path: '/informes' },
  { icon: 'fa-file-alt', label: 'Documentos', path: '/documentos' },
  { icon: 'fa-cog', label: 'Configuración', path: '/configuracion' },
];

const Aside = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 p-2 rounded-lg">
            <i className="fas fa-seedling text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold">AgroSoft</h1>
            <p className="text-gray-400 text-sm">Pro v1.0</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map(({ icon, label, path, badge }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-item flex items-center space-x-3 p-2 rounded-lg transition ${
                    isActive ? 'bg-gray-800 font-semibold' : 'hover:bg-gray-800'
                  }`
                }
              >
                <i className={`fas ${icon}`}></i>
                <span>{label}</span>
                {badge !== undefined && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-auto">
                    {badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info + Logout */}
      <div className="p-4 border-t border-gray-700 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 p-2 rounded-full">
            <i className="fas fa-user"></i>
          </div>
          <div>
            <p className="font-medium">Admin Usuario</p>
            <p className="text-gray-400 text-sm">Administrador</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg flex items-center justify-center space-x-2"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
