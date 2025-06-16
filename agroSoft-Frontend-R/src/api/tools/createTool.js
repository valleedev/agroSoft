import api from '../axios';

export const createTool = async (toolData) => {
  try {
    const response = await api.post('/tools/create', toolData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el colaborador:', error);
    throw error;
  }
};
