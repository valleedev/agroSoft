const { Collaborator } = require('../../models');

const deleteCollaboratorUseCase = async (id) => {
  const collaborator = await Collaborator.findByPk(id);

  if (!collaborator) throw new Error('Colaborador no encontrado');
  

  // Eliminar el colaborador
  await collaborator.destroy();

  return { message: 'Colaborador eliminado exitosamente' };
};

module.exports = {
  deleteCollaboratorUseCase
};
