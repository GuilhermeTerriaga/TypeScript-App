
class Helper {
   sendResponse = function (res, statusCode, data) {
     res.status(statusCode);
     res.json({ result: data });
   };
}

export default new Helper();
