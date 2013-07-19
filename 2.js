var async = require('async');
var iciciquote = require("./1.js");
var csv = require('csv');

iciciquote.returnQuoteJSON("INFY", function (myNewData) {

    console.log(myNewData);
});
