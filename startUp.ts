import * as express from 'express';
import Db from './infra/db';
import * as bodyParser from 'body-parser';
class StartUp {
   public app: express.Application;
   private _db: Db;

   constructor() {
     this.app = express();
     this._db = new Db();
     this._db.createConnection();
     this.routes();
   }

   routes() {
     this.app.route('/teste').get((req, res) => {
       res.send({ versao: '0.0.1' });
     });
   }
}

export default new StartUp();
