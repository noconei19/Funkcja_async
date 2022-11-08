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
let responses = [];
	pobierz(connection,responses);
	wstaw(connection,responses);	
	aktualizuj(connection,responses);
	usuwanie(connection,responses);
	responses.map(q => q[0]).forEach(x => console.log(x));

	connection.end();
}
async function pobierz(a,b,id=0) {
	if(id != 0) {
    	let q1 = await a.promise().query(queries[0]);
		b.push(q1);
	}
	else{
    	let q1 = await a.promise().query(queries[0])
    	}
	}	
async function wstaw(a,b,id=0){
	let q2 = await a.promise().query(queries[1]);
	b.push(q2);
	console.log("Wstawiono")
}
async function aktualizuj(a,b,id=0){
	let q3 = await a.promise().query(queries[2]);
	b.push(q3);
	console.log("Wstawiono")
}
async function usuwanie(a,b,id=0){
	let q4 = await a.promise().query(queries[3]);
	b.push(q4);
	console.log("Usunieto")
}


main();

	