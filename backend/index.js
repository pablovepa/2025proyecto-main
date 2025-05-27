import express from 'express'
import {controllers} from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middleware/error_Handler_Middleware.js';
import { logMiddleware } from './middleware/log_middleware.js';
import { addDependency } from './libs/dependencies.js';
import { UserService } from './services/user.js';
import { LoginService } from './services/login.js';
import { UserMockup } from './mockups/user.js';
import  config  from './config.js';   

if (!config.jwtKey) {
    console.error('No se ha definido la clave JWT en la configuración'); 
    process.exit(1); 
}

const app = express();

const router= express.Router();
app.use('/api',router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

addDependency (`UserService` , UserService);
addDependency (`LoginService` , LoginService);
addDependency (`UserModel` , UserMockup);

const PORT = 3000;
app.listen(
    PORT,
    ()=>{
        console.log(`servidor corriendo en http://localhost:${PORT}`);
    }
);

