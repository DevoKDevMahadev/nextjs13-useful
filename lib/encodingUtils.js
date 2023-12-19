"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;
exports.encode = encode;
// encodingUtils.ts

function encode(value) {
  // Implement your encoding logic here
  return Buffer.from(value).toString("base64");
}
function decode(encodedValue) {
  // Implement your decoding logic here
  return Buffer.from(encodedValue, "base64").toString("utf-8");
}