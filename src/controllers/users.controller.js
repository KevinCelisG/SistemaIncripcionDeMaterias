import {getConnection} from "../db/db";

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from usuario");
    res.json(result); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUsers  
};