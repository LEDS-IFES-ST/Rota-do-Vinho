import mysql from 'promise-mysql';
import keys from './key';

const poolDB = mysql.createPool(keys.database);

poolDB.getConnection()
   .then(connection => {
      poolDB.releaseConnection(connection);
      console.log('DB-avist conectado');
   });


export default poolDB;
export const pool = poolDB;
