require('dotenv').config()
import mysql from 'mysql'


class AppConfig {
    constructor(){

    }

    async getConfig(){

        let x = 5;
        let a =  await axios.get('https://reqres.in/api/users?page=2');
        let b =4;
        console.log(x)
        console.log(process.env.APP_PORT, a)
    }

    async createDBConnection(){
        let connection = await mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '123456',
            database : 'nodestarter'
        });
        connection.connect();
        // let a = await new Promise(resolve => {
        //     connection.query('SELECT * FROM Persons', (error, results, fields)=>{
        //         resolve (results)
        //     });
        // })
        return connection;
    }
}

export default AppConfig;