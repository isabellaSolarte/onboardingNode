import express ,{Request,Response} from 'express';
class Server{
    private app: express.Application;
    private port:string;
    constructor(){
        this.app = express();
        this.port = '3001';
        this.listen();
        this.routes();
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
    }
}
export default Server;