let mysql = require('mysql');
 
// let connection = mysql.createConnection({
//    host:        'db4free.net',
//    user:        'transprima',
//    password:    'Iqbal2507',
//    database:    'transprima'
//  });

let connection = mysql.createConnection({
  host:        'localhost',
  user:        'root',
  password:    '',
  database:    'dompetku'
});

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection; 