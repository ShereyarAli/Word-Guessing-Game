 var mysql = require("mysql2");
 var express = require("express");
 var bodyParser = require("body-parser");
 const encoder = bodyParser.urlencoded();
 const app = express();
 
 const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "userdata"
});

export {conn, mysql, encoder, app}

