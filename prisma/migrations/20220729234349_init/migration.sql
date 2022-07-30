-- CreateTable
CREATE TABLE `LogTransaccional` (
    `id_log` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_log`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curso` (
    `id_curso` INTEGER NOT NULL AUTO_INCREMENT,
    `cupos` INTEGER NOT NULL,
    `fecha_inicio` DATE NOT NULL,
    `fecha_fin` DATE NULL,
    `estado` VARCHAR(1) NOT NULL,
    `Materia_id_materia` INTEGER NULL,

    INDEX `Materia_id_materia`(`Materia_id_materia`),
    PRIMARY KEY (`id_curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inscripcion` (
    `id_inscripcion` INTEGER NOT NULL AUTO_INCREMENT,
    `nota_primer_corte` DECIMAL(3, 0) NOT NULL,
    `nota_segundo_corte` DECIMAL(3, 0) NOT NULL,
    `nota_habilitacion` DECIMAL(3, 0) NULL,
    `Usuario_id_usuario` INTEGER NOT NULL,
    `Curso_id_curso` INTEGER NOT NULL,

    INDEX `Usuario_id_usuario`(`Usuario_id_usuario`),
    INDEX `fk_Inscripcion_Curso1`(`Curso_id_curso`),
    PRIMARY KEY (`id_inscripcion`, `Usuario_id_usuario`, `Curso_id_curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materia` (
    `id_materia` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_materia` VARCHAR(45) NOT NULL,
    `creditos` INTEGER NOT NULL,
    `codigo_materia` INTEGER NOT NULL,
    `estado` VARCHAR(1) NOT NULL,
    `es_habilitable` VARCHAR(2) NOT NULL,

    PRIMARY KEY (`id_materia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_documento` VARCHAR(30) NOT NULL,
    `nombre_usuario` VARCHAR(45) NOT NULL,
    `apellido_usuario` VARCHAR(45) NOT NULL,
    `tipo_documento` VARCHAR(2) NOT NULL,
    `codigo` VARCHAR(10) NOT NULL,
    `estado` VARCHAR(1) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`Materia_id_materia`) REFERENCES `materia`(`id_materia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inscripcion` ADD CONSTRAINT `fk_Inscripcion_Curso1` FOREIGN KEY (`Curso_id_curso`) REFERENCES `curso`(`id_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inscripcion` ADD CONSTRAINT `inscripcion_ibfk_1` FOREIGN KEY (`Usuario_id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
