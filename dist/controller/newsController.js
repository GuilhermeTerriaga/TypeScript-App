Object.defineProperty(exports, '__esModule', { value: true });
const HttpStatus = require('http-status');
const newsService_1 = require('../services/newsService');
const helper_1 = require('../infra/helper');

class NewsController {
  get(req, res) {
    newsService_1.default
      .get()
      .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;
    newsService_1.default
      .getById(_id)
      .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    const model = req.body;
    newsService_1.default
      .create(model)
      .then((news) =>
        helper_1.default.sendResponse(res, HttpStatus.OK, 'News created')
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    const model = req.body;
    newsService_1.default
      .update(_id, model)
      .then((news) =>
        helper_1.default.sendResponse(res, HttpStatus.OK, 'News updated')
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;
    newsService_1.default
      .delete(_id)
      .then((news) =>
        helper_1.default.sendResponse(res, HttpStatus.OK, 'News deleted')
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}
exports.default = new NewsController();
