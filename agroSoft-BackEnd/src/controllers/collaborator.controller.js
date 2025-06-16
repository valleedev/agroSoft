const { 
  createCollaboratorUseCase, 
  getCollaboratorsUseCase, 
  deleteCollaboratorUseCase, 
  updateCollaboratorUseCase 
} = require('../useCases/collaborators')


const createCollaborator = async (req, res) => {
  try {
    const result = await createCollaboratorUseCase(req.body);
    return res.status(201).json({
      ok: true,
      uid: result.uid,
      collaborator: result.collaborator
    });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.msg || 'Por favor hable con el administrador'
    });
  }
};

const getCollaborators = async (req, res) => {
  try {
    const collaborators = await getCollaboratorsUseCase();
    return res.status(200).json({ ok: true, collaborators });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Error al obtener los colaboradores' });
  }
};

const deleteCollaborator = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteCollaboratorUseCase(id);
    res.status(200).json({
      ok: true,
      result
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      ok: false,
      msg: error.msg || 'Error al eliminar el colaborador'
    });
  }
}

const updateCollaborator = async (req, res) => {
  try {
    const collaborator = await updateCollaboratorUseCase(req.params.id, req.body);
    return res.json({ ok: true, msg: 'Colaborador actualizado correctamente', collaborator });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ ok: false, msg: error.msg || 'Error al actualizar el colaborador' });
  }
};

module.exports = {
    createCollaborator,
    getCollaborators,
    deleteCollaborator,
    updateCollaborator
}