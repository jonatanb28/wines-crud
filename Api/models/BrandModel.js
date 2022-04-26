import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BrandModel = db.define('brand', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'brand'
});

export default BrandModel;
