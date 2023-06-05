const express =require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const app=express()
const CryptoJS = require("crypto-js");

const hbs=exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "rentingcars",
//   password: "rentingcars"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE rentingcars", function (err, result) {
//     console.log("Database created");
//   });
// });

var con = mysql.createConnection({
    host: "localhost",
    user: "rentingcars",
    password: "rentingcars",
    database: "rentingcars"
  });

  /////////////////////////////////////////////////////////////////

  const key = "34185124";
  const password = "admin";
  const encrypted = CryptoJS.AES.encrypt(password, key);



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  function init(){
    var sql = "CREATE TABLE users (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,login VARCHAR(255), email VARCHAR(255), tel VARCHAR(255), name VARCHAR(255), surname VARCHAR(255),money INT(11), password VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    var sql = "CREATE TABLE cars (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,brand VARCHAR(255), model VARCHAR(255), price INT(11), type VARCHAR(255), bodytype VARCHAR(255), engine VARCHAR(255), fuel VARCHAR(255), drivingaxle VARCHAR(255), transmission VARCHAR(255), color VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    var sql = "CREATE TABLE role (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,rolename VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var sql = "CREATE TABLE ad (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,address VARCHAR(255),user_id BIGINT(20), car_id BIGINT(20), FOREIGN KEY (user_id) REFERENCES users (id),FOREIGN KEY (car_id) REFERENCES cars (id));";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var sql = "CREATE TABLE renting (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,bought_date datetime,renting_date datetime,days INT(11), user_id BIGINT(20), ad_id BIGINT(20), FOREIGN KEY (user_id) REFERENCES users (id),FOREIGN KEY (ad_id) REFERENCES ad (id));";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var sql = "CREATE TABLE userroles (id BIGINT(20) PRIMARY KEY AUTO_INCREMENT, user_id BIGINT(20), role_id BIGINT(20), FOREIGN KEY (user_id) REFERENCES users (id),FOREIGN KEY (role_id) REFERENCES role (id));";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var sql=`INSERT INTO users VALUES ('1','admin', 'artur@gmail.com', '+37256843420','artur','stassenko','2000','${encrypted}')`;
    con.query(sql, function (err, result) {
    });
    var sql=`INSERT INTO role VALUES ('1','ADMIN')`;
    con.query(sql, function (err, result) {
    });
    var sql=`INSERT INTO role VALUES ('2','USER')`;
    con.query(sql, function (err, result) {
    });
    var sql=`INSERT INTO userroles VALUES ('1',1,1)`;
    con.query(sql, function (err, result) {
    });
    var sql=`INSERT INTO userroles VALUES ('2',1,2)`;
    con.query(sql, function (err, result) {
    });
  }
//   init();
app.engine('hbs',hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/registration', (req,res)=>{
    res.render('registration')
})
app.get('/renting', (req,res)=>{
    res.render('renting')
})
app.get('/account', (req,res)=>{
    res.render('account')
})

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})


