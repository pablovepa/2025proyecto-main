import express from 'express'
import {controllers} from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middleware/error_Handler_Middleware.js';
import { logMiddleware } from './middleware/log_middleware.js';
import { UserMockup } from './mockups/user.js';
import config from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configure_dependecy.js';
    const app = express();

    const router= express.Router();
    app.use('/api',router);

    router.use(express.json());
    router.use(logMiddleware);

     mongoose.connect(config.dbConnection)
     .then(() => console.log('Conexión a la base de datos mongoDB exitosa'))
    .catch(err => console.error('Error al conectar a la base de datos mongoDB:', err));


controllers(router);

router.use(errorHandlerMiddleware);

configureDependencies();

const PORT = 3000;
app.listen(
    PORT,
    ()=>{
        console.log(`servidor corriendo en http://localhost:${PORT}`);
    }
);

