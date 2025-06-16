require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/database');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: '*',
  credentials: true 
}));
app.use(express.json());
app.use('/api', routes); 





// Sincronizar Sequelize con la base de datos
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('✅ Base de datos conectada y sincronizada');
    app.listen(PORT, () => {
      console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar con la base de datos:', error);
  });