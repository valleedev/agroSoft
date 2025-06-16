const { Tool } = require('../../models');

const updateToolUseCase = async (id, updateData) => {
  const tool = await Tool.findByPk(id);
  if (!tool) throw { status: 404, msg: 'Herramienta no encontrada' };


  // Actualizar campos permitidos
  const fieldsToUpdate = [
    'reference',
    'name',
    'status',
    'buy_date',
  ];

  fieldsToUpdate.forEach(field => {
    if (updateData[field] !== undefined) tool[field] = updateData[field];
  });

  await tool.save();

  return tool;
};

module.exports = {
    updateToolUseCase
}