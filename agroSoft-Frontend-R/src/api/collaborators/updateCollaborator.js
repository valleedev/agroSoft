import api from '../axios';

export const updateCollaborator = async (id, collaboratorData) => {
  try {
    const response = await api.put(`/collaborators/update/${id}`, collaboratorData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el colaborador:', error);
    throw error;
  }
};
