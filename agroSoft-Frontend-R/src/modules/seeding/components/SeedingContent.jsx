import React, { useState, useEffect } from 'react';

import Headline from '../../../components/Headline';

import SeedingCards from './SeedingCards';

import { getSeedings } from '../../../api/seedings/getAllSeedings';


const Seedings = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [seedings, setSeedings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSeedings = async () => {
    try {
      setLoading(true);
      const data = await getSeedings();
      console.log(data)
      setSeedings(data.seedings);
    } catch (error) {
      console.error('Error al cargar las siembras:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeedings();
  }, []);



// Funciones de prueba
const editSiembra = (id) => {
  console.log(`Editar siembra con ID: ${id}`)
}

const viewSiembra = (id) => {
  console.log(`Ver detalles de siembra con ID: ${id}`)
}

const addActivity = (id) => {
  console.log(`Agregar actividad a siembra con ID: ${id}`)
}

const deleteSiembra = (id) => {
  console.log(`Eliminar siembra con ID: ${id}`)
}


  return (
    <div className="p-10">
      <Headline
        title="Control de siembra"
        description="Registro y seguimiento de cultivos"
        buttonText="Registrar Siembra"
        iconClass="fas fa-plus"
        onButtonClick={() => setIsCreateModalOpen(true)}
      />
      
      <SeedingCards
        siembras={seedings}
        editSiembra={editSiembra}
        viewSiembra={viewSiembra}
        addActivity={addActivity}
        deleteSiembra={deleteSiembra}
      />
    </div>
  );
};

export default Seedings;
