import db from "../database/db.js";
import { DataTypes } from "sequelize";
import TypesModel from "./TypesModel.js";
import BrandModel from "./BrandModel.js";
import StrainModel from "./StrainModel.js";

const ProductModel = db.define('wines', {
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false}
},
{
    updatedAt: false,
    createdAt: false
})

ProductModel.belongsTo(TypesModel)
ProductModel.belongsTo(BrandModel)
ProductModel.belongsTo(StrainModel)

export default ProductModel;
