import {getConnection} from "../db/db";

const getInscriptions = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from Inscripcion");
    res.json(result); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addInscription = async (req, res) => {
  try {
    const {nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso} = req.body;

    if(nota_primer_corte == undefined || nota_segundo_corte == undefined || nota_habilitacion == undefined || Usuario_id_usuario == undefined || Curso_id_curso == undefined) {
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const inscripcion = {nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso};
    const connection = await getConnection();
    const result = await connection.query("Insert into Inscripcion set ?", inscripcion);
    res.json({message: "Inscription added."}); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const getInscription = async (req, res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("Select * from inscripcion where id_inscripcion = ?", id);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const updateInscription = async (req, res) => {
  try {
    const {id} = req.params;
    const {nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso} = req.body;

    if(nota_primer_corte == undefined || nota_segundo_corte == undefined || nota_habilitacion == undefined || Usuario_id_usuario == undefined || Curso_id_curso == undefined) {
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const inscripcion = {nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso};
    const connection = await getConnection();
    const result = await connection.query("UPDATE inscripcion SET ? where id_inscripcion = ?", [inscripcion, id]);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

export const methods = {
  getInscriptions,
  getInscription,
  updateInscription,
  addInscription
};