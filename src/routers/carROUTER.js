import { Router } from "express";
import { cartPost, cartDelete, cartGetProducts, cartPostProducts, cartDeleteProducts, cartGet } from "./cartLogicRoutes.js";

const cartRouter = Router()

cartRouter.get('/',cartGet)
cartRouter.post('/',cartPost)
cartRouter.delete('/:id', cartDelete)
cartRouter.get('/:id/productos', cartGetProducts)
cartRouter.post('/:id/productos', cartPostProducts)
cartRouter.delete('/:id/productos/:prodId', cartDeleteProducts)

export{cartRouter}