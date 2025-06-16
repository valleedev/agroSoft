import api from '../axios';

export const createCollaborator = async (collaboratorData) => {
  try {
    const response = await api.post('/collaborators/create', collaboratorData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el colaborador:', error);
    throw error;
  }
};
