var accepts = require('accepts');
var util = require('util');
var inspect = util.inspect;

exports = module.exports = function errorHandler(options) {
  var opt = options || {};

  if(!opt.uri){
    opt.uri = "/faq";
  }

  if(!opt.body){
    opt.body = "ok";
  }

  return function faq(req, res, next){
    if(req.path !== opt.uri)
      next();
    else{
      var accept = accepts(req);
      var type = accept.type('json', 'text');
      if (type === 'json'){
        var json = JSON.stringify(opt.body);
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(json);
      }
      else{
        res.setHeader("Content-Type", 'text/plain; charset=utf-8');
        res.end(stringify(opt.body));  
      }
      
    }
  }
};

function stringify(val) {
  var stack = val.stack

  if (stack) {
    return String(stack)
  }

  var str = String(val)

  return str === toString.call(val)
    ? inspect(val)
    : str
}