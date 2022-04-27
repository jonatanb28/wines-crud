import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct, getAllTypes, getAllBrands, getAllStrains } from '../controllers/Products.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/types', getAllTypes)
router.get('/brands', getAllBrands)
router.get('/strains', getAllStrains)
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
