import db from "../database/db.js";
import { DataTypes } from "sequelize";

const StrainModel = db.define('strain', {
    name: {type: DataTypes.STRING, allowNull: false}
},
{
    tableName: 'strain'
});

export default StrainModel;
