import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Mascota = sequelize.define('mascotas', {  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  }
});

export {
  Mascota
}