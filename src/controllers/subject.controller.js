import {getConnection} from "../db/db";

const getSubjects = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from materia");
    res.json(result); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getSubjects  
};