import api from '../axios';

export const deleteTool = async (id) => {
  try {
    const response = await api.delete(`/tools/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el colaborador:', error);
    throw error;
  }
};
