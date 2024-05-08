import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_proof',
    password: '123',
    port: 5432, // Puerto por defecto de PostgreSQL
  });
  
  export default pool;
  