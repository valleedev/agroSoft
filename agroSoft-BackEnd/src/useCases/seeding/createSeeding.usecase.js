const { Seeding } = require('../../models');

const createSeedingUseCase = async (seedingData) => {
  const { seeding_date, location, cultivation, used_consumables, quantity, photo } = seedingData;

  const newSeeding = await Seeding.create({
    seeding_date,
    location,
    cultivation,
    used_consumables,
    quantity,
    photo
  });
  return {
    id: newSeeding.id,
    seeding: newSeeding
  };
};

module.exports = {
    createSeedingUseCase
}