const { Collaborator } = require('../../models');

const getCollaboratorsUseCase = async () => {
  const collaborators = await Collaborator.findAll({});

  return collaborators;
};


module.exports = {
    getCollaboratorsUseCase
}