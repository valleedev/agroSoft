const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const createUserUseCase = async (userData) => {
  const { nombres, contrasena, correo } = userData;

  const userExistEmail = await User.findOne({ where: { correo } });
  if (userExistEmail) throw { status: 400, msg: 'El correo ya está registrado' };

  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(contrasena, salt);

  const newUser = await User.create({
    nombres,
    contrasena:hashedPassword,
    correo
  });

  return {
    uid: newUser.id,
    user: newUser
  };
};

module.exports = {
    createUserUseCase
}