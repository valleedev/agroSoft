const { createUserUseCase } = require('../useCases/user')


const createUser = async (req, res) => {
  try {
    const result = await createUserUseCase(req.body);
    return res.status(201).json({
      ok: true,
      uid: result.uid,
      user: result.user
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
    createUser
}