import Sequelize from "sequelize";

const sequelize = new Sequelize('mascotas', 'postgres', 'andres123', {
  host: 'localhost',
  dialect: 'postgres'
});

export {
  sequelize
}