const { Collaborator } = require('../../models');

const updateCollaboratorUseCase = async (id, updateData) => {
  const collaborator = await Collaborator.findByPk(id);
  if (!collaborator) throw { status: 404, msg: 'Colaborador no encontrado' };


  // Actualizar campos permitidos
  const fieldsToUpdate = [
    'identification',
    'name',
    'charge',
    'contact',
  ];

  fieldsToUpdate.forEach(field => {
    if (updateData[field] !== undefined) collaborator[field] = updateData[field];
  });

  await collaborator.save();

  return collaborator;
};

module.exports = {
    updateCollaboratorUseCase
}