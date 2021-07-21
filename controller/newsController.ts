import * as HttpStatus from 'http-status';
import NewsService from '../services/newsService';
import Helper from '../infra/helper';

class NewsController {
  get(req, res) {
    NewsService.get()
    .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
    .catch(error => console.error.bind(console, `Error ${error}`))
   }

  getById(req, res) {
    let _id = req.params.id;
    NewsService.getById(_id)
    .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
    .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let model = req.body;
    NewsService.create(model)
    .then(news => Helper.sendResponse(res, HttpStatus.OK, 'News created'))
    .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    let _id = req.params.id;
    let model = req.body;
    NewsService.update(_id, model)
    .then(news => Helper.sendResponse(res, HttpStatus.OK, 'News updated'))
    .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;
    NewsService.delete(_id)
    .then(news => Helper.sendResponse(res, HttpStatus.OK, 'News deleted'))
    .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new NewsController();