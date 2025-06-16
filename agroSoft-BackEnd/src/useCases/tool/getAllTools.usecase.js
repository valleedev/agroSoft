const { Tool } = require('../../models');

const getToolsUseCase = async () => {
  const tools = await Tool.findAll({});

  return tools;
};


module.exports = {
    getToolsUseCase
}