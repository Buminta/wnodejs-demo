var configs = require(__dirname+"/configs.js");
var wnodejs = require("wnodejs");

wnodejs.use("root_path", __dirname);
wnodejs.use("configs", configs);

wnodejs.init();