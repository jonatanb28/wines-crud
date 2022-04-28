import BrandModel from "../models/BrandModel.js";
import ProductModel from "../models/ProductModel.js";
import StrainModel from "../models/StrainModel.js";
import TypesModel from "../models/TypesModel.js";

export const getAllProducts = async (req, res)=>{
    
    try {
        const product = await ProductModel.findAll({
            include:[
                {
                    model: TypesModel,
                    attributes:["name"]
                },
                {
                    model: BrandModel,
                    attributes:["name"]
                },
                {
                    model: StrainModel,
                    attributes:["name"]
                } 
            ]
        })
        const {name} = req.query;
        if(name){
            const totalProducts = product;
            const productName = totalProducts.filter(ele=>ele.name.toLowerCase().includes(name.toLowerCase()))
        
            if(productName){
                return res.status(200).send(productName);
            } return res.send({error: 'Product not found'})
        } 
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }

}

export const getAllTypes = async (req, res)=>{
    try {
        const type = await TypesModel.findAll()
        res.json(type)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllStrains = async (req, res)=>{
    try {
        const strain = await StrainModel.findAll()
        res.json(strain)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllBrands = async (req, res)=>{
    try {
        const brand = await BrandModel.findAll()
        res.json(brand)
    } catch (error) {
        res.json({message: error.message} )
    }
}

export const getProduct = async (req, res) => {
    
    try {
        const product = await ProductModel.findAll({
            include:[
                {
                    model: TypesModel,
                    attributes:["name"]
                },
                {
                    model: BrandModel,
                    attributes:["name"]
                },
                {
                    model: StrainModel,
                    attributes:["name"]
                } 
            ],
            where:{
                id: req.params.id
            }
        })
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProduct = async (req, res) => {

    const {name, image, price, typeId, strainId, brandId, description} = req.body;
    try {
        const product = await ProductModel.create({
            name, image, price, description, typeId, strainId, brandId
        });

        res.status(200).json({
            'message':'Producto creado',
            product
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res) =>{
    console.log(req.method)
    try {
        const {id} = req.params
        const {name, description, price, strainId, typeId, brandId} = req.body;
        await ProductModel.update(
            { name, description, price, strainId, typeId, brandId },
            { where: { id } }
        )
        res.json({
            'message':'Producto actualizado'
        })
    } catch (error ) {
        res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        res.json(await ProductModel.destroy({
             where: {id} 
        }))
    } catch (error) {
        res.json({message: error.message})
    }
}