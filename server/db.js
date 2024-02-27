import mysql from 'mysql2/promise.js'
import 'dotenv/config'

const { HOST, USER, PASSWORD, DB } = process.env;
const dbConfig = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB
  };

const connect = async () => {
    return await mysql.createConnection(dbConfig)
    .then((conn) => {
        console.log('Connected to the database');
        return conn;
    })
    .catch(error => console.error(error))
};

export const query = async (sql, values) => {
        const connection = connect();
        try{
            const [rows] = await connection.execute(sql, values);
            await connection.end();
            return rows;
        } catch (error) {
            console.error('Error executing SQL query:', error);
        }
    };

export default async () => {

    const connection = await mysql.createConnection(dbConfig);
    try {
      await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
          user_id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          first_name VARCHAR(50),
          last_name VARCHAR(50)
      );
      `);
  
      await connection.query(`CREATE TABLE IF NOT EXISTS messages (
          message_id INT AUTO_INCREMENT PRIMARY KEY,
          sender_user_id INT NOT NULL,
          receiver_user_id INT NOT NULL,
          message TEXT,
          epoch BIGINT,
          FOREIGN KEY (sender_user_id) REFERENCES users(user_id),
          FOREIGN KEY (receiver_user_id) REFERENCES users(user_id)
      );
    `)
    }
    catch (error) {
      console.error(error)
    }
    finally {
      await connection.end();
    }
  }