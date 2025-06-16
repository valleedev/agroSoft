import api from '../axios';

export const updateTool = async (id, toolData) => {
  try {
    const response = await api.put(`/tools/update/${id}`, toolData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el colaborador:', error);
    throw error;    
  }
};
