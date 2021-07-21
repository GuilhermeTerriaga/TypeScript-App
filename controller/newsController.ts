/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import * as HttpStatus from 'http-status';
import NewsService from '../services/newsService';

class NewsController {
   sendResponse = function (res, statusCode, data) {
     res.status(statusCode).json({ result: data });
   }

   get(req, res) {
     NewsService.get()
       .then((news) => this.sendResponse(res, HttpStatus.OK, news))
       .catch((error) => console.error.bind(console, `Error ${error}`));
   }

   getById(req, res) {
     const _id = req.params.id;
     NewsService.getById(_id)
       .then((news) => this.sendResponse(res, HttpStatus.Ok, news))
       .catch((error) => console.error.bind(console, `Error ${error}`));
   }

   create(req, res) {
     const model = req.params.body;
     NewsService.create(model)
       .then((news) => this.sendResponse(res, HttpStatus.Ok, 'News created'))
       .catch((error) => console.error.bind(console, `Error ${error}`));
   }

   update(req, res) {
     const _id = req.params.id;
     // eslint-disable-next-line prefer-const
     let model = req.params.body;
     NewsService.update(_id, model)
       .then((news) => this.sendResponse(res, HttpStatus.Ok, `${news.title} updated`))
       .catch((error) => console.error.bind(console, `Error ${error}`));
   }

   delete(req, res) {
     const _id = req.params.id;
     NewsService.delete(_id)
       .then(() => this.sendResponse(HttpStatus.Ok, 'News deleted'))
       .catch((error) => console.error.bind(console, `Error ${error}`));
   }
}

export default new NewsController();