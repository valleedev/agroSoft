const {createCollaboratorUseCase} = require('./createCollaborator.usecase');
const {getCollaboratorsUseCase} = require('./getAllCollaborators.usecase');
const {deleteCollaboratorUseCase} = require('./deleteCollaborator.usecase');
const {updateCollaboratorUseCase} = require('./updateCollaborator.usecase');

module.exports = {
    createCollaboratorUseCase,
    getCollaboratorsUseCase,
    deleteCollaboratorUseCase,
    updateCollaboratorUseCase
}