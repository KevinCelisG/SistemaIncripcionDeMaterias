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

const addUsers = async (req, res) => {
  try {
    const {numero_documento, nombre_usuario, apellido_usuario, tipo_documento, codigo, estado} = req.body;

    if(numero_documento == undefined || nombre_usuario == undefined || apellido_usuario == undefined || tipo_documento == undefined || codigo == undefined || estado == undefined){
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const user = {numero_documento, nombre_usuario, apellido_usuario, tipo_documento, codigo, estado};
    const connection = await getConnection();
    const result = await connection.query("Insert into usuario set ?", user);
    res.json({message: "User added."}); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("Select * from usuario where id_usuario = ?", id);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const {numero_documento, nombre_usuario, apellido_usuario, tipo_documento, codigo, estado} = req.body;

    if(numero_documento == undefined || nombre_usuario == undefined || apellido_usuario == undefined || tipo_documento == undefined || codigo == undefined || estado == undefined){
      res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    const user = {numero_documento, nombre_usuario, apellido_usuario, tipo_documento, codigo, estado};
    const connection = await getConnection();
    const result = await connection.query("UPDATE usuario SET ? where id_usuario = ?", [user, id]);
    res.json(result); 
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

export const methods = {
  getUsers,  
  getUser,  
  updateUser,
  addUsers
};