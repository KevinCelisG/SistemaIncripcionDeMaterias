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

const addSubjects = async (req, res) => {
  try {
    const {nombre_materia, creditos, codigo_materia, estado, es_habilitable} = req.body;

    if(nombre_materia == undefined || creditos == undefined || codigo_materia == undefined || estado == undefined || es_habilitable == undefined){
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const subject = {nombre_materia, creditos, codigo_materia, estado, es_habilitable};
    const connection = await getConnection();
    const result = await connection.query("Insert into materia set ?", subject);
    res.json({message: "Subject added."}); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const getSubject = async (req, res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("Select * from materia where id_materia = ?", id);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const updateSubject = async (req, res) => {
  try {
    const {id} = req.params;
    const {nombre_materia, creditos, codigo_materia, estado, es_habilitable} = req.body;

    if(nombre_materia == undefined || creditos == undefined || codigo_materia == undefined || estado == undefined || es_habilitable == undefined){
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const subject = {nombre_materia, creditos, codigo_materia, estado, es_habilitable};
    const connection = await getConnection();
    const result = await connection.query("UPDATE materia SET ? where id_materia = ?", [subject, id]);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

export const methods = {
  getSubjects,
  addSubjects,
  getSubject,
  updateSubject
};