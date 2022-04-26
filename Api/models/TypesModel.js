import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TypesModel = db.define('types', {
    name: {type: DataTypes.STRING, allowNull: false}
});

export default TypesModel;
