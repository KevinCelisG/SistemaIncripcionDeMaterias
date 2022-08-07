-- CreateTable
CREATE TABLE `LogTransaccional` (
    `id_log` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(0) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_log`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `id_curso` INTEGER NOT NULL AUTO_INCREMENT,
    `cupos` INTEGER NOT NULL,
    `fecha_inicio` DATE NOT NULL,
    `fecha_fin` DATE NOT NULL,
    `estado` VARCHAR(1) NOT NULL,
    `Materia_id_materia` INTEGER NULL,

    INDEX `Materia_id_materia`(`Materia_id_materia`),
    PRIMARY KEY (`id_curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materia` (
    `id_materia` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_materia` VARCHAR(45) NOT NULL,
    `creditos` INTEGER NOT NULL,
    `codigo_materia` INTEGER NOT NULL,
    `estado` VARCHAR(1) NOT NULL,
    `es_habilitable` VARCHAR(2) NOT NULL,

    PRIMARY KEY (`id_materia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_documento` VARCHAR(30) NOT NULL,
    `nombre_usuario` VARCHAR(45) NOT NULL,
    `apellido_usuario` VARCHAR(45) NOT NULL,
    `tipo_documento` VARCHAR(2) NOT NULL,
    `codigo` VARCHAR(10) NOT NULL,
    `estado` VARCHAR(1) NOT NULL,
    `imagen` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_ibfk_1` FOREIGN KEY (`Materia_id_materia`) REFERENCES `Materia`(`id_materia`) ON DELETE NO ACTION ON UPDATE NO ACTION;
