import db from "../database/db.js";
import { DataTypes } from "sequelize";


const ImagesModel = db.define('images', {
    path: {type: DataTypes.STRING, allowNull: false}
});

export default ImagesModel;
