-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/04/2024 às 04:00
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
-- Estrutura para tabela `comentario`
--

CREATE TABLE `comentario` (
  `nome` text NOT NULL,
  `mensagem` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comentario`
--

INSERT INTO `comentario` (`nome`, `mensagem`) VALUES
('Leo Barriga', 'Bom demaizi'),
('Duda ', 'Jogo fera em'),
('Ana Julia', 'Voces sao fera dms galera parabens'),
('Igor Mariz Cunha', 'Muito legal o jogo piazada principalmente o level 2 do game'),
('Julia ', 'Gostei do jogo, mas acho que dava pra fazer melhor em');

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
(81, 'Igor Mariz ', 'igormarizcunha@ufu.br', 'Não, muito fera tá', 'Facil, queria mais dificil,  Me diverti', '5');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
