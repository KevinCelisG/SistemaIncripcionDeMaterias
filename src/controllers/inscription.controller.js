import { getConnection } from "../db/db";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getInscriptions = async(req, res) => {
    try {
        const allMaterias = await prisma.inscripcion.findMany()
        res.json(allMaterias);
    } catch (error) {
        res.status(500);
        res.json({
            error: 500,
            message: error.message
        });
    }
};

const addInscription = async(req, res) => {
    try {
        const { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso } = req.body;

        if (nota_primer_corte == undefined || nota_segundo_corte == undefined || nota_habilitacion == undefined || Usuario_id_usuario == undefined || Curso_id_curso == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const inscripcion = { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso };
        const allMaterias = await prisma.inscripcion.create({
            data: inscripcion
        })

        res.json({ status: 200, message: allMaterias });
    } catch (error) {
        res.status(500).json({
            error: 500,
            message: error.message
        });
    }
};

const getInscription = async(req, res) => {
    try {
        const { id } = req.params;
        const allMaterias = await prisma.materia.findMany({
            where: {
                id_inscripcion: parseInt(id)
            },
        })
        if (allMaterias != []) {
            res.status(200);
            res.json({ status: 200, message: allMaterias });
        } else {
            res.status(404).json({ error: 404, message: "Bad request. Not Found." });
        }
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
};

const updateInscription = async(req, res) => {
    try {
        const { id } = req.params;
        const { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso } = req.body;

        if (nota_primer_corte == undefined || nota_segundo_corte == undefined || nota_habilitacion == undefined || Usuario_id_usuario == undefined || Curso_id_curso == undefined) {
            res.status(400).json({ error: 400, message: "Bad request. Please fill all fields." });
        }

        const inscripcion = { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso };
        const allMaterias = await prisma.materia.findMany({
            where: {
                id_inscripcion: parseInt(id)
            },
            data: inscripcion
        })
        res.json(allMaterias);
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