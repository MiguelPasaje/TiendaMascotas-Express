import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Mascota = sequelize.define('mascotas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  /*   id_tipo_animal: {
      type: DataTypes.INTEGER,
      forenkey: true
    }, */
  estado_adopcion: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});

export {
  Mascota
}