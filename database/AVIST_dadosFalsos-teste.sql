-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 13-Maio-2020 às 01:48
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `avistdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Contato`
--

CREATE TABLE `Contato` (
  `codContato` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `TipoContato_TipoContato` int(11) NOT NULL,
  `descContato` tinytext DEFAULT NULL COMMENT 'Informar o número do telefone ou o perfil da empresa nas redes sociais.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Informação sobre os telefones e as redes sociais da empresa.';

--
-- Extraindo dados da tabela `Contato`
--

INSERT INTO `Contato` (`codContato`, `Empresa_codEmpresa`, `TipoContato_TipoContato`, `descContato`) VALUES
(1, 3, 4, 'https://www.facebook.com/CantinaMattiello/'),
(2, 1, 2, '(27)9999-8888'),
(3, 4, 2, '(27)9999-8888');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Empresa`
--

CREATE TABLE `Empresa` (
  `codEmpresa` int(11) NOT NULL,
  `TipoEmpresa_codTipoEmpresa` int(11) NOT NULL,
  `nomeEmpresa` tinytext DEFAULT NULL,
  `infos` tinytext DEFAULT NULL,
  `biografia` tinytext DEFAULT NULL,
  `email` tinytext DEFAULT NULL,
  `linkGoogleMaps` tinytext DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Empresa`
--

INSERT INTO `Empresa` (`codEmpresa`, `TipoEmpresa_codTipoEmpresa`, `nomeEmpresa`, `infos`, `biografia`, `email`, `linkGoogleMaps`, `latitude`, `longitude`) VALUES
(1, 1, 'Avist', 'associacao viticultores de stersa e regiao', 'Era uma vez um lugar que nossa', 'avist@avist.vivax.net', 'http://googlemaps.link', 123, 54567),
(3, 2, 'Cantina Mattiello', 'Comune di Soave', NULL, 'matiello@matiello.org', 'http://linkMatiello.googleMaps', 123, 456),
(4, 2, 'Casa dos Espumantes', 'Casa com espumas', NULL, 'casa@espumantes.net', 'http://espumantes.googleMaps', 1111, 11111100),
(5, 2, 'OKKKKKKKK', 'zenon', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Endereco`
--

CREATE TABLE `Endereco` (
  `codEndereco` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `rua` tinytext DEFAULT NULL,
  `cidade` tinytext DEFAULT NULL,
  `bairro` tinytext DEFAULT NULL,
  `numero` tinytext DEFAULT NULL,
  `referencia` tinytext DEFAULT NULL,
  `logradouro` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Endereco`
--

INSERT INTO `Endereco` (`codEndereco`, `Empresa_codEmpresa`, `rua`, `cidade`, `bairro`, `numero`, `referencia`, `logradouro`) VALUES
(1, 3, 'rua matiello fabrette', 'Santa Teresa', 'Guardanopolis', '350', NULL, '1'),
(2, 1, 'rua_avist', 'santa teresa', 'centro', '2', NULL, NULL),
(3, 4, 'opa', 'BH', 'Centro', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Imagem`
--

CREATE TABLE `Imagem` (
  `codImagem` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `TipoImagem_codTipoImagem` int(11) NOT NULL,
  `pathImagem` tinytext DEFAULT NULL,
  `descImagem` tinytext DEFAULT NULL,
  `ordemApresentacao` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Imagem`
--

INSERT INTO `Imagem` (`codImagem`, `Empresa_codEmpresa`, `TipoImagem_codTipoImagem`, `pathImagem`, `descImagem`, `ordemApresentacao`) VALUES
(1, 3, 2, 'http://i0.wp.com/www.cantinamattiello.com.br/wp-content/uploads/2016/09/fundocantina.png', 'carr', '1'),
(2, 4, 3, 'https://i2.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/08/casa-dos-espumantes-garrafas-wide.jpg?fit=1892%2C510', 'espuma', '1'),
(3, 4, 2, 'https://i0.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/06/1.png?w=954', 'espuma2', '2'),
(4, 1, 1, 'http://seila.jpg', 'sssss', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Informacao`
--

CREATE TABLE `Informacao` (
  `codInformacao` int(11) NOT NULL,
  `TipoInformacao_codTipoInformacao` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `descInformacao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Armazena as descrições sobre a empresa.';

--
-- Extraindo dados da tabela `Informacao`
--

INSERT INTO `Informacao` (`codInformacao`, `TipoInformacao_codTipoInformacao`, `Empresa_codEmpresa`, `descInformacao`) VALUES
(1, 1, 1, '\r\nMay indulgence difficulty ham can put especially. Bringing remember for supplied her why was confined. Middleton principle did she procuring extensive believing add. Weather adapted prepare oh is calling. These wrong of he which there smile to my front. He fruit oh enjoy it of whose table. Cultivated occasional old her unpleasing unpleasant. At as do be against pasture covered viewing started. Enjoyed me settled mr respect no spirits civilly. '),
(3, 1, 3, 'Mal sabia Atílio que o destino de sua família estava em colonizar terras capixabas. Em 6 de fevereiro de 1895 com apenas 7 anos de idade chegava a Vitória- ES, logo em seguida tomaram destino para região serrana de Santa Teresa-ES com seus pais, o irmão Luciano, a irmã Caterina e muitas outras famílias imigrantes que atravessaram o atlântico no navio Rosário. Nova terra, novo clima , nova língua , novas plantas, novas culturas… A adaptação de sua família em terras capixabas foi muito difícil e cheio de aventuras.\r\n\r\nAo chegarem no município encontraram a jabuticaba, uma fruta nativa da mata Atlântica existente na região, onde produziram vinhos para o consumo da família.\r\n\r\nPassou a tradição por gerações, chegando ao seu neto Atilio Mattielo, que fez surgir toda a tradição de seus antepassados, cultivando uvas para a vinificação.\r\n\r\nEm março de 1996, Viviane Mattiello, filha de Atilio Mattielo (neto), inaugurou a Cantina Mattiello, que alem de seus produtos próprios,  vinhos, licores, café torrado, sucos e geléias, trabalham com agro turismo, recebendo visitas às parreiras de uvas e proporcionando aos clientes a oportunidade de conhecer o processo de produção dos vinhos e degustação dos produtos ao final do tour.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Pessoa`
--

CREATE TABLE `Pessoa` (
  `codPessoa` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `nome` tinytext DEFAULT NULL COMMENT '	',
  `email` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Pessoa`
--

INSERT INTO `Pessoa` (`codPessoa`, `Empresa_codEmpresa`, `nome`, `email`) VALUES
(1, 1, 'Marvio Lucio Gomes', 'marvio@lucio.net'),
(3, 3, 'Void Spirit', 'phoenix@spirit.net');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Produto`
--

CREATE TABLE `Produto` (
  `codProduto` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `nomeProduto` tinytext DEFAULT NULL,
  `descProduto` tinytext DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Identifica os produtos disponibilizados pela empresa. A coluna Ativo indica se o produto deve ou não aparecer nas listagens.';

-- --------------------------------------------------------

--
-- Estrutura da tabela `Servico`
--

CREATE TABLE `Servico` (
  `codServico` int(11) NOT NULL,
  `Empresa_codEmpresa` int(11) NOT NULL,
  `descServico` tinytext DEFAULT NULL,
  `descHorario` tinytext DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Identifica os serviços disponibilizados pela empresa. A coluna Ativo indica se o serviço deve ou não aparecer nas listagens.';

-- --------------------------------------------------------

--
-- Estrutura da tabela `TelefonePessoa`
--

CREATE TABLE `TelefonePessoa` (
  `codTelPessoa` int(11) NOT NULL,
  `numero` int(11) DEFAULT NULL,
  `Pessoa_codPessoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoContato`
--

CREATE TABLE `TipoContato` (
  `codTipoContato` int(11) NOT NULL,
  `nomeTipoContato` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Identifica os tipos de formas de contato com a empresa (Telefones / Redes sociais).';

--
-- Extraindo dados da tabela `TipoContato`
--

INSERT INTO `TipoContato` (`codTipoContato`, `nomeTipoContato`) VALUES
(1, 'Telefone Fixo'),
(2, 'Whatsapp'),
(3, 'Email'),
(4, 'Facebook'),
(5, 'Instagram'),
(6, 'Twitter'),
(7, 'YouTube');

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoEmpresa`
--

CREATE TABLE `TipoEmpresa` (
  `codTipoEmpresa` int(11) NOT NULL,
  `nomeTipoEmpresa` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `TipoEmpresa`
--

INSERT INTO `TipoEmpresa` (`codTipoEmpresa`, `nomeTipoEmpresa`) VALUES
(1, 'Associação'),
(2, 'Vinícola / Cantina'),
(3, 'Parceiro'),
(4, 'Colaborador');

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoImagem`
--

CREATE TABLE `TipoImagem` (
  `codTipoImagem` int(11) NOT NULL,
  `nomeTipoImagem` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `TipoImagem`
--

INSERT INTO `TipoImagem` (`codTipoImagem`, `nomeTipoImagem`) VALUES
(1, 'Logomarca'),
(2, 'Carrossel'),
(3, 'Fotos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoInformacao`
--

CREATE TABLE `TipoInformacao` (
  `codTipoInformacao` int(11) NOT NULL,
  `descTipoInformacao` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Identifica os tipos de informações da empresa (Ex.: Histórico, Descrição da Empresa, Missão, Valores)';

--
-- Extraindo dados da tabela `TipoInformacao`
--

INSERT INTO `TipoInformacao` (`codTipoInformacao`, `descTipoInformacao`) VALUES
(1, 'Histórico'),
(2, 'Descrição da Empresa'),
(3, 'Missão'),
(4, 'Valores'),
(5, 'Outros');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `Contato`
--
ALTER TABLE `Contato`
  ADD PRIMARY KEY (`codContato`),
  ADD KEY `fk_TelefoneEmpresa_Empresa1_idx` (`Empresa_codEmpresa`),
  ADD KEY `fk_Contato_TipoContato1_idx` (`TipoContato_TipoContato`);

--
-- Índices para tabela `Empresa`
--
ALTER TABLE `Empresa`
  ADD PRIMARY KEY (`codEmpresa`),
  ADD KEY `fk_Empresa_TipoEmpresa1_idx` (`TipoEmpresa_codTipoEmpresa`);

--
-- Índices para tabela `Endereco`
--
ALTER TABLE `Endereco`
  ADD PRIMARY KEY (`codEndereco`),
  ADD KEY `fk_Endereco_Empresa1_idx` (`Empresa_codEmpresa`);

--
-- Índices para tabela `Imagem`
--
ALTER TABLE `Imagem`
  ADD PRIMARY KEY (`codImagem`),
  ADD KEY `fk_Imagem_Empresa1_idx` (`Empresa_codEmpresa`),
  ADD KEY `fk_Imagem_TipoImagem1_idx` (`TipoImagem_codTipoImagem`);

--
-- Índices para tabela `Informacao`
--
ALTER TABLE `Informacao`
  ADD PRIMARY KEY (`codInformacao`),
  ADD KEY `fk_Informacao_Empresa1_idx` (`Empresa_codEmpresa`),
  ADD KEY `fk_Informacao_TipoInformacao1_idx` (`TipoInformacao_codTipoInformacao`);

--
-- Índices para tabela `Pessoa`
--
ALTER TABLE `Pessoa`
  ADD PRIMARY KEY (`codPessoa`),
  ADD KEY `fk_Pessoa_Empresa1_idx` (`Empresa_codEmpresa`);

--
-- Índices para tabela `Produto`
--
ALTER TABLE `Produto`
  ADD PRIMARY KEY (`codProduto`),
  ADD KEY `fk_Produto_Empresa1_idx` (`Empresa_codEmpresa`);

--
-- Índices para tabela `Servico`
--
ALTER TABLE `Servico`
  ADD PRIMARY KEY (`codServico`),
  ADD KEY `fk_Servico_Empresa1_idx` (`Empresa_codEmpresa`);

--
-- Índices para tabela `TelefonePessoa`
--
ALTER TABLE `TelefonePessoa`
  ADD PRIMARY KEY (`codTelPessoa`,`Pessoa_codPessoa`),
  ADD KEY `fk_TelefonePessoa_Pessoa1_idx` (`Pessoa_codPessoa`);

--
-- Índices para tabela `TipoContato`
--
ALTER TABLE `TipoContato`
  ADD PRIMARY KEY (`codTipoContato`);

--
-- Índices para tabela `TipoEmpresa`
--
ALTER TABLE `TipoEmpresa`
  ADD PRIMARY KEY (`codTipoEmpresa`);

--
-- Índices para tabela `TipoImagem`
--
ALTER TABLE `TipoImagem`
  ADD PRIMARY KEY (`codTipoImagem`);

--
-- Índices para tabela `TipoInformacao`
--
ALTER TABLE `TipoInformacao`
  ADD PRIMARY KEY (`codTipoInformacao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Contato`
--
ALTER TABLE `Contato`
  MODIFY `codContato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `Empresa`
--
ALTER TABLE `Empresa`
  MODIFY `codEmpresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `Endereco`
--
ALTER TABLE `Endereco`
  MODIFY `codEndereco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Imagem`
--
ALTER TABLE `Imagem`
  MODIFY `codImagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `Informacao`
--
ALTER TABLE `Informacao`
  MODIFY `codInformacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Pessoa`
--
ALTER TABLE `Pessoa`
  MODIFY `codPessoa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Produto`
--
ALTER TABLE `Produto`
  MODIFY `codProduto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Servico`
--
ALTER TABLE `Servico`
  MODIFY `codServico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `TipoContato`
--
ALTER TABLE `TipoContato`
  MODIFY `codTipoContato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `TipoEmpresa`
--
ALTER TABLE `TipoEmpresa`
  MODIFY `codTipoEmpresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `TipoImagem`
--
ALTER TABLE `TipoImagem`
  MODIFY `codTipoImagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `TipoInformacao`
--
ALTER TABLE `TipoInformacao`
  MODIFY `codTipoInformacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `Contato`
--
ALTER TABLE `Contato`
  ADD CONSTRAINT `fk_Contato_TipoContato1` FOREIGN KEY (`TipoContato_TipoContato`) REFERENCES `TipoContato` (`codTipoContato`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TelefoneEmpresa_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Empresa`
--
ALTER TABLE `Empresa`
  ADD CONSTRAINT `fk_Empresa_TipoEmpresa1` FOREIGN KEY (`TipoEmpresa_codTipoEmpresa`) REFERENCES `TipoEmpresa` (`codTipoEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Endereco`
--
ALTER TABLE `Endereco`
  ADD CONSTRAINT `fk_Endereco_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Imagem`
--
ALTER TABLE `Imagem`
  ADD CONSTRAINT `fk_Imagem_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Imagem_TipoImagem1` FOREIGN KEY (`TipoImagem_codTipoImagem`) REFERENCES `TipoImagem` (`codTipoImagem`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Informacao`
--
ALTER TABLE `Informacao`
  ADD CONSTRAINT `fk_Informacao_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Informacao_TipoInformacao1` FOREIGN KEY (`TipoInformacao_codTipoInformacao`) REFERENCES `TipoInformacao` (`codTipoInformacao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Pessoa`
--
ALTER TABLE `Pessoa`
  ADD CONSTRAINT `fk_Pessoa_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Produto`
--
ALTER TABLE `Produto`
  ADD CONSTRAINT `fk_Produto_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `Servico`
--
ALTER TABLE `Servico`
  ADD CONSTRAINT `fk_Servico_Empresa1` FOREIGN KEY (`Empresa_codEmpresa`) REFERENCES `Empresa` (`codEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `TelefonePessoa`
--
ALTER TABLE `TelefonePessoa`
  ADD CONSTRAINT `fk_TelefonePessoa_Pessoa1` FOREIGN KEY (`Pessoa_codPessoa`) REFERENCES `Pessoa` (`codPessoa`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
