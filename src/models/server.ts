import express ,{Request,Response} from 'express';
import routesProduct from '../routes/Product';
import db from '../db/connection';
class Server{
    private app: express.Application;
    private port:string;
    constructor(){
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
    routes (){
        this.app.get('/', (req: Request, res:Response)=>{
            res.json({
                message: 'Hello World'
            });
        });
        this.app.use('/api/products',routesProduct);
    }
    middlewares(){
        this.app.use(express.json());
    }
    async dbConnection(){
        await db.authenticate()
        .then(()=>{
            console.log('Database connected');
        })
        .catch((err:Error)=>{
            console.log('Error:',err);
        });
    }
}
export default Server;