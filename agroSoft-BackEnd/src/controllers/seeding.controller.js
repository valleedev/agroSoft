const { createSeedingUseCase } = require('../useCases/seeding')


const createSeeding = async (req, res) => {
  try {
    const result = await createSeedingUseCase(req.body);
    return res.status(201).json({
      ok: true,
      id: result.id,
      seeding: result.seeding
    });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.msg || 'Por favor hable con el administrador'
    });
  }
};




module.exports = {
    createSeeding
}