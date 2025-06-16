const { Tool } = require('../../models');

const deleteToolUseCase = async (id) => {
  const tool = await Tool.findByPk(id);

  if (!tool) throw new Error('Herramienta no encontrada');
  

  await tool.destroy();

  return { message: 'Herramienta eliminada exitosamente' };
};

module.exports = {
  deleteToolUseCase
};
