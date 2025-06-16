import React, { useState, useEffect } from 'react';

import Headline from '../../../components/Headline';

import Toolstable from './ToolsTable';
import CreateToolModal from './CreateToolModal';
import UpdateToolModal from './UpdateToolModal';

import { getTools } from '../../../api/tools/getAllTools';
import { createTool } from '../../../api/tools/createTool';
import { updateTool } from '../../../api/tools/updateTool';
import { deleteTool } from '../../../api/tools/deleteTool';

const Tools = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTools = async () => {
    try {
      setLoading(true);
      const data = await getTools();
      setTools(data.tools);
    } catch (error) {
      console.error('Error al cargar herramientas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const handleCreateTool = async (toolData) => {
    try {
      await createTool(toolData);
      setIsCreateModalOpen(false);
      await fetchTools();
      alert('Herramienta creada correctamente ✅');
    } catch (error) {
      console.error('Error al crear herramienta:', error);
    }
  };

  const handleUpdateTool = async (id, toolData) => {
    try {
      await updateTool(id, toolData);
      await fetchTools();
      alert('Herramienta actualizada correctamente ✏️');
    } catch (error) {
      console.error('Error al actualizar herramienta:', error);
      setIsUpdateModalOpen(false);
      setSelectedTool(null);
    }
  };

  const handleDeleteTools = async (id) => {
    try {
      await deleteTool(id);
      await fetchTools();
      alert('Herramienta eliminada correctamente ❌');
    } catch (error) {
      console.error('Error al eliminar herramienta:', error);
    }
  };

  const openUpdateModal = (tool) => {
    setSelectedTool(tool);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="p-10">
      <Headline
        title="Gestión de Herramientas"
        description="Administra las herramientas de tu operación agrícola"
        buttonText="Nueva Herramienta"
        iconClass="fas fa-plus"
        onButtonClick={() => setIsCreateModalOpen(true)}
      />

      {/* Modal Crear */}
      <CreateToolModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateTool}
      />

      {/* Modal Editar */}
      <UpdateToolModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onSubmit={(data) => handleUpdateTool(selectedTool.id, data)}
        initialData={selectedTool}
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Toolstable
          tools={tools}
          loading={loading}
          onDelete={handleDeleteTools}
          onUpdate={openUpdateModal}
        />
      </div>
    </div>
  );
};

export default Tools;
