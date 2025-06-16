import api from '../axios';

export const deleteCollaborator = async (id) => {
  try {
    const response = await api.delete(`/collaborators/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el colaborador:', error);
    throw error;
  }
};
