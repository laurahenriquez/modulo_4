let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "04643964B",
  database: "dia1",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexión correcta.");
  }
});

let sql="";

sql= 'SELECT studen_id, mark FROM marks WHERE (mark_id BETWEEN 1 AND 30) OR (mark > 8 AND date < "2021-11-01")'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("id y nota de los estudiantes ", res)
    }
});

sql= 'SELECT AVG(mark) FROM marks WHERE subject_id=1 AND date BETWEEN "2021-11-01" AND "2022-11-01"';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Media de la asignatura 1 en el ultimo año ", res)
    }
});

sql= `SELECT studen_id, AVG (mark) FROM marks WHERE studen_id 
AND date BETWEEN "2022-01-01" AND "2022-11-01" GROUP BY studen_id`;
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Media de alumnos del ultimo año ", res)
    }
});

connection.end();