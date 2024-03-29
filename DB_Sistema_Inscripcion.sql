-- MySQL Script generated by MySQL Workbench
-- Sat Jun 18 16:44:25 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `numero_documento` VARCHAR(30) NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `apellido_usuario` VARCHAR(45) NOT NULL,
  `tipo_documento` VARCHAR(2) NOT NULL,
  `codigo` VARCHAR(10) NOT NULL,
  `estado` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`LogTransaccional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`LogTransaccional` (
  `id_log` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `estado` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_log`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Materia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Materia` (
  `id_materia` INT NOT NULL AUTO_INCREMENT,
  `nombre_materia` VARCHAR(45) NOT NULL,
  `creditos` INT NOT NULL,
  `codigo_materia` INT NOT NULL,
  `estado` VARCHAR(1) NOT NULL,
  `es_habilitable` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id_materia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Curso (
  `id_curso` INT NOT NULL AUTO_INCREMENT,
  `cupos` INT NOT NULL,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `estado` VARCHAR(1) NOT NULL,
  `Materia_id_materia` INT NULL,
  PRIMARY KEY (`id_curso`));

ALTER TABLE Curso ADD FOREIGN KEY(Materia_id_materia) REFERENCES Materia(id_materia);

-- -----------------------------------------------------
-- Table `mydb`.`Inscripcion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Inscripcion (
  `id_inscripcion` INT NOT NULL AUTO_INCREMENT,
  `nota_primer_corte` DECIMAL(3) NULL,
  `nota_segundo_corte` DECIMAL(3) NULL,
  `nota_habilitacion` DECIMAL(3) NULL,
  `Usuario_id_usuario` INT NULL,
  `Curso_id_curso` INT NOT NULL,
  PRIMARY KEY (`id_inscripcion`, `Usuario_id_usuario`, `Curso_id_curso`));

ALTER TABLE Inscripcion ADD FOREIGN KEY(Usuario_id_usuario) REFERENCES Usuario(id_usuario);

ALTER TABLE Inscripcion ADD FOREIGN KEY(Curso_id_curso) REFERENCES Curso(id_curso);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`Usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Usuario` (`id_usuario`, `numero_documento`, `nombre_usuario`, `apellido_usuario`, `tipo_documento`, `codigo`, `estado`) VALUES (1, '1002938471', 'Carlos', 'Castro', 'CC', '201810239', 'E');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Materia`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Materia` (`id_materia`, `nombre_materia`, `creditos`, `codigo_materia`, `estado`, `es_habilitable`) VALUES (1, 'Cálculo I', 4, 1000005, 'A', 'SI');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Curso`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Curso` (`id_curso`, `cupos`, `fecha_inicio`, `fecha_fin`, `estado`, `Materia_id_materia`) VALUES (1, 30, '02/05/2022', '29/08/2022', 'Activo', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Inscripcion`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Inscripcion` (`id_inscripcion`, `nota_primer_corte`, `nota_segundo_corte`, `nota_habilitacion`, `Usuario_id_usuario`, `Curso_id_curso`) VALUES (1, 3.2, 3.5, NULL, 1, 1);

COMMIT;
