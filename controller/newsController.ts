/* eslint-disable @typescript-eslint/naming-convention */
import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';
import NewsService from '../services/newsService';

class NewsController {
  get(req, res) {
    NewsService.get()
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;
    NewsService.getById(_id)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    const model = req.body;
    NewsService.create(model)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, `${news} created`))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    const model = req.body;
    NewsService.update(_id, model)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, `${news} updated`))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;
    NewsService.delete(_id)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, `${news} deleted`))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}

export default new NewsController();
