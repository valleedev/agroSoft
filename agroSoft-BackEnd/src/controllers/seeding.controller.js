const { createSeedingUseCase, getSeedingsUseCase } = require('../useCases/seeding')


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

const getSeedings = async (req, res) => {
  try {
    const seedings = await getSeedingsUseCase();
    return res.status(200).json({ ok: true, seedings });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Error al obtener los colaboradores' });
  }
};


module.exports = {
    createSeeding,
    getSeedings
}