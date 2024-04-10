-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/04/2024 às 19:14
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `formulario`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `form`
--

CREATE TABLE `form` (
  `ID` int(11) NOT NULL,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `sugestao` text NOT NULL,
  `exp` text NOT NULL,
  `nota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `form`
--

INSERT INTO `form` (`ID`, `nome`, `email`, `sugestao`, `exp`, `nota`) VALUES
(1, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(2, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(3, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(4, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(5, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(6, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(7, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(8, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(9, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(10, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(11, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(12, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(13, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(14, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(15, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(16, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(17, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(18, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(19, 'Igor Mariz', 'igormarizcunha@ufu.br', '', '', ''),
(20, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(21, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(22, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(23, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(24, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(25, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(26, 'Maria duarda', 'duda@gmail.com', '', '', ''),
(27, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(28, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(29, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(30, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(31, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(32, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(33, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(34, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(35, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(36, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(37, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(38, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(39, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(40, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(41, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(42, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(43, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(44, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(45, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(46, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(47, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(48, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(49, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(50, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(51, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(52, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(53, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(54, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(55, 'igor mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(56, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(57, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(58, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(59, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(60, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(61, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(62, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(63, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(64, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(65, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(66, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', ''),
(67, 'Igor Mariz ', 'igormarizcunha@ufu.br', '', '', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `form`
--
ALTER TABLE `form`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
