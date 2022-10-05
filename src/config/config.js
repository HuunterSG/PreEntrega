import dotenv from "dotenv"

dotenv.config()

const DEVPORT = 8080;

const config = {
    db:{
        products: 'productos',
        carts: 'carritos',
    },
    server:{
        PORT: process.env.PORT || DEVPORT,
        routes:{
            base:'/api',
            products:'/api/productos',
            carts: '/api/carrito',
        },
    },
};

export {config}