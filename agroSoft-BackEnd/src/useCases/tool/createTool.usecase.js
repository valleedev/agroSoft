const { Tool } = require('../../models');

const createToolUseCase = async (toolData) => {
  const { reference, name, status, buy_date } = toolData;

  const toolExistReference = await Tool.findOne({ where: { reference } });
  if (toolExistReference) throw { status: 400, msg: 'La herramienta ya está registrado' };

  const newTool = await Tool.create({
    reference,
    name,
    status,
    buy_date
  });
  return {
    id: newTool.id,
    tool: newTool
  };
};

module.exports = {
    createToolUseCase
}