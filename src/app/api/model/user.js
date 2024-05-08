import pool from "@/db/postgresConection"; 

export const insertUser = async  (data) =>{
    let result =true;
    let error = false
    let sql = null;
    try {
        const { nombre, contraseña, correo } = data; 
        let sql = `INSERT INTO usuario (nombre, correo, contraseña) VALUES ('${nombre}', '${correo}', '${contraseña}')`;   
        await pool.query(sql);
        
    } catch (err) {
        result= false;
        error = {
            "sql" : sql,
            "description": err
        }
        console.log(error)  
    }
    let response = {
        "preocess": 'insert user',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}
export const selectUser = async () => {
    let result = false;
    let error = null; 
    let sql = 'SELECT * FROM usuario';
    try {
        const { rows } = await pool.query(sql); 
        result = rows; 
    } catch (err) {
        error = {
            "sql": sql,
            "description": err
        };
    }
    let response = {
        "preocess": 'select user',
        "status": true,
        "result": result,
        "error": error 
    };
    return response;
};


export const selectUserId = async (id) =>{
    let result =false;
    let error = false
    let sql = ""
    try{
        let sql = `SELECT * FROM usuario WHERE  id  = '${id}'`
        let [rows] = await pool.query(sql);
        result =rows
    }catch (err){
        error = {
            "sql" : sql,
            "description": err
        }
        console.log(error)  
    }
    let response = {
        "preocess": 'select user',
        "status": true,
        "result": result

    }
    return response
}

export const updateUser =  async (id,data) =>{
    let status = false;
    let error = false;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE usuario  SET   ${updates.join(', ')} WHERE id = ${id}  `; 
    try {  
        await pool.query(sql);
        status = true
    } catch (err) {
        result= false;
        error = {
            "sql" : sql,
            "description": err
        }
    }
    let response = {
        "preocess": 'update user',
        "status": status,
        "error": error
    }
    return response
}

export const deleteUser = async (id) =>{
  
    
   let status = false;
    let error = false
    let sql = `DELETE FROM usuario WHERE  id  = '${id}'`
    try{
        await pool.query(sql);
        status = true
    }catch (err){
        error = {
            "sql" : sql,
            "description": err
        } 
    }
    
    let response = {
        "preocess": 'delete user',
        "status": status,
        "error": error
    }
    
    return response;
}