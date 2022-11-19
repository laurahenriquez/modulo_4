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


let sql = ""

sql = "CREATE TABLE `dia1`.`students` (`student_id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(45) NULL"
+ ",`last_name` VARCHAR(45) NULL,`group_id` VARCHAR(45) NULL,PRIMARY KEY (`student_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `dia1`.`subjects` (`subject_id` INT NOT NULL AUTO_INCREMENT,`title` VARCHAR(45) NULL,PRIMARY KEY (`subject_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `dia1`.`teachers` (`teacher_id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(45) NULL,`last_name` VARCHAR(45) NULL,PRIMARY KEY (`teacher_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `dia1`.`subject_teacher` (`subject_id` INT NOT NULL AUTO_INCREMENT,`teacher_id` INT NOT NULL,`group_id` INT NOT NULL,PRIMARY KEY (`subject_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `dia1`.`groups` (`group_id` INT NOT NULL AUTO_INCREMENT,`name` INT NOT NULL,PRIMARY KEY (`group_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `dia1`.`marks` (`mark_id` INT NOT NULL AUTO_INCREMENT,`studen` INT NOT NULL,`subject_id` INT NOT NULL,`mark` INT NOT NULL,PRIMARY KEY (`mark_id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});


sql = "SELECT first_name,last_name FROM dia1.teachers;";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "SELECT * FROM dia1.teachers;";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

connection.end();