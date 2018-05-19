module.exports = {
DB_SCHEMA : "salesforcedev",// schema name of production/sandbox. change the configuration as per environment
getConnection: ()=>{
var pg = require('pg');
var client = new pg.Client({
   user: process.env.USER || "mojgoufytdknqq", // user name of production/sandbox. change the configuration as per environment
   password: process.env.PASSWORD || "5b3df6b8411f2ffb4867a4235f3dc02887752857e864e238385d5fb08e13e11d", // password of production/sandbox. change the configuration as per environment
   database: process.env.DATABASE || "d5op9of40ud0ho", // database name of production/sandbox. change the configuration as per environment
   port: 5432,
   host: "ec2-54-225-200-15.compute-1.amazonaws.com", // host name of production/sandbox. change the configuration as per environment
   ssl: true
}); 
   client.connect();
   return client;
}
};