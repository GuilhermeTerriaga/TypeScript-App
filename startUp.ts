import * as express from 'express';
import Db from './infra/db';


class StartUp {
   public app: express.Application;
   private _db: Db;

   constructor() {
     this.app = express();
     this._db = new Db();
     this._db.createConnection();
     this.middler();
     this.routes();
   }

   middler(){
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));
   }

   routes() {
     this.app.route('/teste').get((req, res) => {
       res.send({ versao: '0.0.1' });
     });
   }
}

export default new StartUp();
