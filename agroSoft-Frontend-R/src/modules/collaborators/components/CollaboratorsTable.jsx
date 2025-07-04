import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import UpdateCollaboratorModal from './UpdateCollaboratorModal'; 

const Collaboratorstable = ({ collaborators = [], loading = false, onDelete, onUpdate }) => {
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openDeleteModal = (collaborator) => {
    setSelectedCollaborator(collaborator);
    setIsDeleteModalOpen(true);
  };

  const openUpdateModal = (collaborator) => {
    setSelectedCollaborator(collaborator);
    setIsUpdateModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedCollaborator) {
      onDelete(selectedCollaborator.id);
    }
    setIsDeleteModalOpen(false);
    setSelectedCollaborator(null);
  };

  const handleUpdate = (updatedData) => {
    if (selectedCollaborator) {
      onUpdate(selectedCollaborator.id, updatedData);
    }
    setIsUpdateModalOpen(false);
    setSelectedCollaborator(null);
  };

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p>Cargando colaboradores...</p>
      ) : (
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colaborador</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {collaborators.length > 0 ? (
              collaborators.map((collaborator) => (
                <tr key={collaborator.id}>
                  <td className="px-6 py-4">{collaborator.name}</td>
                  <td className="px-6 py-4">{collaborator.charge}</td>
                  <td className="px-6 py-4">{collaborator.contact}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => openUpdateModal(collaborator)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => openDeleteModal(collaborator)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  No hay colaboradores disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Modal de confirmación de eliminación */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        collaboratorName={selectedCollaborator?.name}
      />

      {/* Modal de actualización */}
      <UpdateCollaboratorModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onSubmit={handleUpdate}
        initialData={selectedCollaborator}
      />
    </div>
  );
};

export default Collaboratorstable;
