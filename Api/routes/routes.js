import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct, getAllData } from '../controllers/Products.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.get('/data', getAllData)
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
