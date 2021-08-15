import * as cors from 'cors';
import * as express from 'express';
import NewsController from './controller/newsController';
import Db from './infra/db';

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

  enableCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*',
    };
    this.app.use(cors(options));
  }

  middleware() {
    this.enableCors();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1' });
    });

    this.app.route('/api/v1/news').get(NewsController.get);
    this.app.route('/api/v1/news/:id').get(NewsController.getById);
    this.app.route('/api/v1/news/').post(NewsController.create);
    this.app.route('/api/v1/news/:id').put(NewsController.update);
    this.app.route('/api/v1/news/:id').delete(NewsController.delete);
  }
}

export default new StartUp();
