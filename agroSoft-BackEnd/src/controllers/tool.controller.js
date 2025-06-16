const { createToolUseCase, getToolsUseCase, deleteToolUseCase, updateToolUseCase } = require('../useCases/tool')


const createTool = async (req, res) => {
  try {
    const result = await createToolUseCase(req.body);
    return res.status(201).json({
      ok: true,
      id: result.id,
      tool: result.tool
    });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.msg || 'Por favor hable con el administrador'
    });
  }
};

const getTool = async (req, res) => {
  try {
    const tools = await getToolsUseCase();
    return res.status(200).json({ ok: true, tools });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Error al obtener las herramientas' });
  }
};

const deleteTool = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteToolUseCase(id);
    res.status(200).json({
      ok: true,
      result
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      ok: false,
      msg: error.msg || 'Error al eliminar la herramienta'
    });
  }
}

const updateTool = async (req, res) => {
  try {
    const tool = await updateToolUseCase(req.params.id, req.body);
    return res.json({ ok: true, msg: 'Herramienta actualizada correctamente', tool });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ ok: false, msg: error.msg || 'Error al actualizar la herramienta' });
  }
};


module.exports = {
    createTool,
    getTool,
    deleteTool,
    updateTool
}