import api from '../axios';

export const getCollaborators = async () => {
  try {

    const response = await api.get('/collaborators')
    return response.data; // Devuelve solo los datos
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};
