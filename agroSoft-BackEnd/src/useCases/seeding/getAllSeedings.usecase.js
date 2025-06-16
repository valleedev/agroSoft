const { Seeding } = require('../../models');

const getSeedingsUseCase = async () => {
  const seeding = await Seeding.findAll({});

  return seeding;
};


module.exports = {
    getSeedingsUseCase
}