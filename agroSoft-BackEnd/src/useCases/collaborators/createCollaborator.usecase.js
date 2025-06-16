const { Collaborator } = require('../../models');

const createCollaboratorUseCase = async (userData) => {
  const { identification, name, charge, contact } = userData;

  const collaboratorExistIdentification = await Collaborator.findOne({ where: { identification } });
  if (collaboratorExistIdentification) throw { status: 400, msg: 'El colaborador ya está registrado' };

  const newCollaborator = await Collaborator.create({
    identification,
    name,
    charge,
    contact
  });
  return {
    uid: newCollaborator.id,
    collaborator: newCollaborator
  };
};

module.exports = {
    createCollaboratorUseCase
}