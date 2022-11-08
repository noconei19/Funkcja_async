var mysql = require('mysql2');

const queries = ["SELECT * FROM nocon.users",
"INSERT INTO user1 (uid,login,password,gender) VALUE (3,'joanna','bardzotajne','women')",
"DELETE FROM user1 WHERE uid='2'", 
"UPDATE user1 SET uid= 1 WHERE login='jan'",]
async function main(){
	var connection = mysql.createConnection({
  		host: "localhost",
  		user: "nocon",
  		password: "CKI7cZee-BfLVFuE",
  		database: 'nocon'
	});
	connection.connect();
	let responses = []
    
    let q1 = await connection.promise().query(queries[0])
    responses.push(q1)

	let q2 = await connection.promise().query(queries[1])
    responses.push(q2)
    
	let q3 = await connection.promise().query(queries[2])
    responses.push(q3)

	let q4 = await connection.promise().query(queries[3])
    responses.push(q4)
    
    responses.map(q => q[0].forEach(x => console.log(x)))
    connection.end()
}	
main();