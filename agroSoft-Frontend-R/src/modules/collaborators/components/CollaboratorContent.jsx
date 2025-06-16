import React, { useState, useEffect } from 'react';

import Headline from '../../../components/Headline';

import Collaboratorstable from './CollaboratorsTable';
import CreateCollaboratorModal from './CreateCollaboratorModal';
import UpdateCollaboratorModal from './UpdateCollaboratorModal';

import { createCollaborator } from '../../../api/collaborators/createCollaborator';
import { getCollaborators } from '../../../api/collaborators/getAllCollaborators';
import { deleteCollaborator } from '../../../api/collaborators/deleteCollaborator';
import { updateCollaborator } from '../../../api/collaborators/updateCollaborator';

const Colaboradores = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
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
      setIsCreateModalOpen(false);
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

  const handleUpdateCollaborator = async (id, updatedData) => {
    try {
      await updateCollaborator(id, updatedData);
      await fetchCollaborators();
      alert('Colaborador actualizado correctamente ✏️');
    } catch (error) {
      console.error('Error al actualizar colaborador:', error);
    } finally {
      setIsUpdateModalOpen(false);
      setSelectedCollaborator(null);
    }
  };

  const openUpdateModal = (collaborator) => {
    setSelectedCollaborator(collaborator);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className='p-10'>
      {/* Encabezado */}
      <Headline
        title="Gestión de Colaboradores"
        description="Administra el personal de tu operación agrícola"
        buttonText="Nuevo Colaborador"
        iconClass="fas fa-plus"
        onButtonClick={() => setIsCreateModalOpen(true)}
      />

      {/* Modal Crear */}
      <CreateCollaboratorModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateCollaborator}
      />

      {/* Modal Editar */}
      <UpdateCollaboratorModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onSubmit={(data) => handleUpdateCollaborator(data.id, data)}
        initialData={selectedCollaborator}
      />

      {/* Tabla */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Collaboratorstable
          collaborators={collaborators}
          loading={loading}
          onDelete={handleDeleteCollaborator}
          onUpdate={openUpdateModal}
        />
      </div>
    </div>
  );
};

export default Colaboradores;
