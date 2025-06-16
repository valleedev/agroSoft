import api from '../axios';

export const getSeedings = async () => {
  try {

    const response = await api.get('/seedings')
    return response.data;
  } catch (error) {
    console.error('Error al obtener las siembras:', error);
    throw error; 
  }
};
