import api from '../axios';

export const getTools = async () => {
  try {

    const response = await api.get('/tools')
    return response.data; // Devuelve solo los datos
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};
