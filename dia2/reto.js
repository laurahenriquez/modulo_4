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
// sql="SELECT AVG(mark) FROM marks WHERE subject_id = 1";
// connection.query(sql, function(err, res){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Nota media", res[0]['AVG(mark)'])
//     }
// });


// sql="SELECT COUNT(*) FROM students";
// connection.query(sql, function(err, res){
//     if (err){
//         console.log(err);
//     } else {

//         console.log("Total de alumnos en el bootcamp ", res[0]['COUNT(*)'])
//     }
// });

// sql="DELETE FROM mark WHERE (mark > 5) AND (date < '2021-01-01')";
// connection.query(sql, function(err, res){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Notas eliminadas")
//     }
// });

// sql='SELECT * FROM students WHERE ingreso BETWEEN "2022-01-01" AND "2022-11-01"';
// connection.query(sql, function(err, res){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Estudiantes 2022 ", res)
//     }
// });


// sql="SELECT COUNT(*) FROM teachers, subjects";
// connection.query(sql, function(err, res){
//     if (err){
//         console.log(err);
//     } else {

//         console.log("Total de profesores en el bootcamp ", res[0]['COUNT(*)'])
//     }
// });


sql= "SELECT  teacher_id, COUNT(subject_id) FROM subject_teacher GROUP BY subject_id"
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nº de profesores por asignatura ", res)
    }
});
connection.end();