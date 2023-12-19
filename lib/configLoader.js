"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// configLoader.js
var loadConfig = function loadConfig() {
  return new Promise(function (resolve, reject) {
    var configPath = "https://github.com/DevoKDevMahadev/nextjs13-useful/blob/main/config.json"; // Adjust the path accordingly

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            var config = JSON.parse(xhr.responseText);
            resolve(config);
          } catch (error) {
            reject(new Error("Error parsing JSON data"));
          }
        } else {
          reject(new Error("Error loading configuration"));
        }
      }
    };
    xhr.open("GET", configPath, true);
    xhr.send();
  });
};
var _default = exports["default"] = loadConfig;