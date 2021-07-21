import * as express from 'express';

import Db from './infra/db';
import NewsController from './controller/newsController';


class StartUp {
   public app: express.Application;
   private _db: Db;

   constructor() {
     this.app = express();
     this._db = new Db();
     this._db.createConnection();
     this.middleware();
     this.routes();
   }

   middleware(){
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));
   }

   routes() {
     this.app.route('/teste').get((req, res) => {
       res.send({ versao: '0.0.1' });
     });

     this.app.route('/api/v1/news').get(NewsController.get);
     this.app.route('/api/v1/news:id').get(NewsController.getById);
     this.app.route('/api/v1/news/').post(NewsController.create);
     this.app.route('/api/v1/news/:id').put(NewsController.update);
     this.app.route('/api/v1/news/').delete(NewsController.delete);


   }
}

export default new StartUp();
