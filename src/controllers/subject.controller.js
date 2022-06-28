import { getConnection } from "../db/db";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getSubjects = async(req, res) => {
    try {
        // const connection = await getConnection();
        // const result = await connection.query("Select * from materia");
        const allMaterias = await prisma.materia.findMany()
        res.json(allMaterias);
    } catch (error) {
        res.status(500);
        res.json({
            error: 500,
            message: error.message
        });
    }
};

const addSubjects = async(req, res) => {
    try {
        const { nombre_materia, creditos, codigo_materia, estado, es_habilitable } = req.body;
        if (nombre_materia == undefined || creditos == undefined || codigo_materia == undefined || estado == undefined || es_habilitable == undefined) {
            res.status(400).json({ error: 400, message: "Bad request. Please fill all fields." });
        }
        const subject = { nombre_materia, creditos, codigo_materia, estado, es_habilitable };
        const allMaterias = await prisma.materia.create({
            data: subject
        })

        res.json({ status: 200, message: allMaterias });
    } catch (error) {
        res.status(500).json({
            error: 500,
            message: error.message
        });;
    }
};

const getSubject = async(req, res) => {
    try {
        const { id } = req.params;
        // const connection = await getConnection();
        // const result = await connection.query("Select * from materia where id_materia = ?", id);
        // res.json(result);

        const allMaterias = await prisma.materia.findMany({
            where: {
                codigo_materia: parseInt(id)
            },
        })
        if (allMaterias != []) {
            res.status(200);
            res.json({ status: 200, message: allMaterias });
        } else {
            res.status(404).json({ error: 404, message: "Bad request. Not Found." });
        }

    } catch (error) {
        res.status(500).json({ error: 404, message: error.message });
        console.log(error.message);
    }
};

const updateSubject = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre_materia, creditos, codigo_materia, estado, es_habilitable } = req.body;

        if (nombre_materia == undefined || creditos == undefined || codigo_materia == undefined || estado == undefined || es_habilitable == undefined) {
            res.status(400).json({ error: 400, message: "Bad request. Please fill all fields." });
        }

        const subject = { nombre_materia, creditos, codigo_materia, estado, es_habilitable };
        // const connection = await getConnection();
        // const result = await connection.query("UPDATE materia SET ? where id_materia = ?", [subject, id]);
        const allMaterias = await prisma.materia.findMany({
            where: {
                codigo_materia: parseInt(id)
            },
            data: subject

        })
        res.json(allMaterias);
    } catch (error) {
        // res.status(500);
        // console.log(error.message);
    }
};

export const methods = {
    getSubjects,
    addSubjects,
    getSubject,
    updateSubject
};