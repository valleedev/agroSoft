import React, { useState, useEffect } from 'react';
import Collaboratorstable from './CollaboratorsTable';
import CreateCollaboratorModal from './CreateCollaboratorModal';
import { createCollaborator } from '../../../api/collaborators/createCollaborator';
import { getCollaborators } from '../../../api/collaborators/getAllCollaborators';
import { deleteCollaborator } from '../../../api/collaborators/deleteCollaborator';

const Colaboradores = () => {
  const [search, setSearch] = useState('');
  const [cargo, setCargo] = useState('Todos los cargos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCollaborators = async () => {
    try {
      setLoading(true);
      const data = await getCollaborators();
      setCollaborators(data.collaborators);
    } catch (error) {
      console.error('Error al cargar colaboradores:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollaborators();
  }, []);

  const handleCreateCollaborator = async (newCollaborator) => {
    try {
      await createCollaborator(newCollaborator);
      await fetchCollaborators();
      alert('Colaborador creado correctamente ✅');
    } catch (error) {
      console.error('Error al crear colaborador:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleDeleteCollaborator = async (id) => {
    try {
      await deleteCollaborator(id);
      await fetchCollaborators();
      alert('Colaborador eliminado correctamente ❌');
    } catch (error) {
      console.error('Error al eliminar colaborador:', error);
    }
  };

  return (
    <div className='p-10'>
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Gestión de Colaboradores</h3>
          <p className="text-gray-600">Administra el personal de tu operación agrícola</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <i className="fas fa-plus"></i>
          <span>Nuevo Colaborador</span>
        </button>
      </div>

      {/* Modal */}
      <CreateCollaboratorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCollaborator}
      />

      {/* Filtros y Acciones */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar colaboradores..."
                  className="bg-gray-100 border-0 rounded-lg px-4 py-2 pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              >
                <option>Todos los cargos</option>
                <option>Agricultor</option>
                <option>Supervisor</option>
                <option>Operador</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <i className="fas fa-filter"></i>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Tabla de colaboradores */}
        <Collaboratorstable
          collaborators={collaborators}
          loading={loading}
          onDelete={handleDeleteCollaborator}
        />
      </div>
    </div>
  );
};

export default Colaboradores;
