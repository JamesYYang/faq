var app = require("express")();
var faq = require("../index");

var body = {
  content: "hello faq"
}

var faqOption = {
  uri: "/faq",
  body: body
}

app.use(faq(faqOption));


var server = app.listen(8001, function() {
  console.log("Server start...");
});