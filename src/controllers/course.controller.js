import { getConnection } from "../db/db";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const getCourses = async(req, res) => {
    try {
        //const connection = await getConnection();
        //const result = await connection.query("Select * from Curso");
        //console.log(result);
        const allUsers = await prisma.curso.findMany()
        console.log(allUsers)
    } catch (error) {
        res.status(500);
        res.json({
            error: 500,
            message: error.message
        });
    }
};

const addCourse = async(req, res) => {
    try {
        const { cupos, fecha_inicio, fecha_fin, estado, Materia_id_materia } = req.body;

        if (cupos == undefined || fecha_inicio == undefined || fecha_fin == undefined || estado == undefined || Materia_id_materia == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const course = { cupos, fecha_inicio, fecha_fin, estado, Materia_id_materia };
        const connection = await getConnection();
        const result = await connection.query("Insert into Materia set ?", course);
        res.json({ message: "Course added." });
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
};

const getCourse = async(req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("Select * from inscripcion where id_inscripcion = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
};

const updateCourse = async(req, res) => {
    try {
        const { id } = req.params;
        const { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso } = req.body;

        if (nota_primer_corte == undefined || nota_segundo_corte == undefined || nota_habilitacion == undefined || Usuario_id_usuario == undefined || Curso_id_curso == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const inscripcion = { nota_primer_corte, nota_segundo_corte, nota_habilitacion, Usuario_id_usuario, Curso_id_curso };
        const connection = await getConnection();
        const result = await connection.query("UPDATE inscripcion SET ? where id_inscripcion = ?", [inscripcion, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
};

export const methods = {
    getCourses,
    getCourse,
    updateCourse,
    addCourse
};