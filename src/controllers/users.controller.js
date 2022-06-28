import {getConnection} from "../db/db";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const allUsers = await prisma.usuario.findMany();
    res.json(allUsers); 
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
    
    const result = await prisma.usuario.create({
            data: user
        })

    res.json({ status: 200, message: result });
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    
    const user = await prisma.usuario.findMany({
            include: {
                id_usuario: id
           },   
    })
        
    res.json(user); 
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
    
      const userUpdated = await prisma.usuario.findMany({
                where: {
                    id_usuario: parseInt(id)
                },
                data: user

            })
    
    res.json(userUpdated); 
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
