import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import UpdateToolModal from './UpdateToolModal';

const Toolstable = ({ tools = [], loading = false, onDelete, onUpdate }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openDeleteModal = (tool) => {
    setSelectedTool(tool);
    setIsDeleteModalOpen(true);
  };

  const openUpdateModal = (tool) => {
    setSelectedTool(tool);
    setIsUpdateModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedTool) {
      onDelete(selectedTool.id);
    }
    setIsDeleteModalOpen(false);
    setSelectedTool(null);
  };

  const handleUpdate = (updatedData) => {
    if (selectedTool) {
      onUpdate(selectedTool.id, updatedData);
    }
    setIsUpdateModalOpen(false);
    setSelectedTool(null);
  };

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p className="p-4">Cargando herramientas...</p>
      ) : (
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referencia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Compra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tools.length > 0 ? (
              tools.map((tool) => (
                <tr key={tool.id}>
                  <td className="px-6 py-4">{tool.reference}</td>
                  <td className="px-6 py-4">{tool.name}</td>
                  <td className="px-6 py-4">{tool.status}</td>
                  <td className="px-6 py-4">{tool.buy_date}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => openUpdateModal(tool)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => openDeleteModal(tool)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No hay herramientas disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Modales */}
      
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        toolName={selectedTool?.name}
      />

      <UpdateToolModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onSubmit={handleUpdate}
        initialData={selectedTool}
      />
     
    </div>
  );
};

export default Toolstable;
