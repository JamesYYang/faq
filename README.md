# faq

faq middleware for express

## Install

```sh
$ npm install faq
```

## API

```js
var faq = require('faq')
```

### faq(options)

Using this middleware to handle load balance server's faq monitor.

#### Options

Faq accepts these properties in the options object.

##### uri

Provide faq URI. Default URI is ```/faq```.

##### body

Provide faq response object. Default response is ```ok```.

## Examples

### Simple example

Basic example of adding this middleware.

```js
var app = require("express")();
var faq = require("faq");

app.use(faq());

```

### Custom URI and Response


```js
var app = require("express")();
var faq = require("faq");

var body = {
  content: "hello faq"
}

var faqOption = {
  uri: "/new-faq",
  body: body
}

app.use(faq(faqOption));

```

## License

[MIT]