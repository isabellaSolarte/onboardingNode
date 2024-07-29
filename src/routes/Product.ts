import e, { Router } from "express";
import { get } from "http";
import { getProducts,getProduct, deleteProduct, postProduct, putProduct } from "../controllers/Product";
const router = Router();

router.get('/',getProducts); 
router.get('/:id',getProduct);
router.delete('/:id',deleteProduct);
router.post('/',postProduct);
router.put('/:id',putProduct);
export default router;