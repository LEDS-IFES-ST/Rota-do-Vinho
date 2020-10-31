INSERT INTO `Empresa` (`codEmpresa`, `TipoEmpresa_codTipoEmpresa`, `nomeEmpresa`, `infos`, `biografia`, `email`, `linkGoogleMaps`, `latitude`, `longitude`) VALUES
(1, 1, 'Avist', 'associacao viticultores de stersa e regiao', 'Era uma vez um lugar que nossa', 'avist@avist.vivax.net', 'http://googlemaps.link', 123, 54567),
(3, 2, 'Cantina Mattiello', 'Comune di Soave', NULL, 'matiello@matiello.org', 'http://linkMatiello.googleMaps', 123, 456),
(4, 2, 'Casa dos Espumantes', 'Casa com espumas', NULL, 'casa@espumantes.net', 'http://espumantes.googleMaps', 1111, 11111100),
(5, 2, 'OKKKKKKKK', 'zenon', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `Contato` (`codContato`, `Empresa_codEmpresa`, `TipoContato_TipoContato`, `descContato`) VALUES
(1, 3, 4, 'https://www.facebook.com/CantinaMattiello/'),
(2, 1, 2, '(27)9999-8888'),
(3, 4, 2, '(27)9999-8888');
INSERT INTO `Endereco` (`codEndereco`, `Empresa_codEmpresa`, `rua`, `cidade`, `bairro`, `numero`, `referencia`, `logradouro`) VALUES
(1, 3, 'rua matiello fabrette', 'Santa Teresa', 'Guardanopolis', '350', NULL, '1'),
(2, 1, 'rua_avist', 'santa teresa', 'centro', '2', NULL, NULL),
(3, 4, 'opa', 'BH', 'Centro', NULL, NULL, NULL);
INSERT INTO `Imagem` (`codImagem`, `Empresa_codEmpresa`, `TipoImagem_codTipoImagem`, `pathImagem`, `descImagem`, `ordemApresentacao`) VALUES
(1, 3, 2, 'http://i0.wp.com/www.cantinamattiello.com.br/wp-content/uploads/2016/09/fundocantina.png', 'carr', '1'),
(2, 4, 3, 'https://i2.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/08/casa-dos-espumantes-garrafas-wide.jpg?fit=1892%2C510', 'espuma', '1'),
(3, 4, 2, 'https://i0.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/06/1.png?w=954', 'espuma2', '2'),
(4, 1, 1, 'http://seila.jpg', 'sssss', NULL);
INSERT INTO `Informacao` (`codInformacao`, `TipoInformacao_codTipoInformacao`, `Empresa_codEmpresa`, `descInformacao`) VALUES
(1, 1, 1, '\r\nMay indulgence difficulty ham can put especially. Bringing remember for supplied her why was confined. Middleton principle did she procuring extensive believing add. Weather adapted prepare oh is calling. These wrong of he which there smile to my front. He fruit oh enjoy it of whose table. Cultivated occasional old her unpleasing unpleasant. At as do be against pasture covered viewing started. Enjoyed me settled mr respect no spirits civilly. '),
(3, 1, 3, 'Mal sabia Atílio que o destino de sua família estava em colonizar terras capixabas. Em 6 de fevereiro de 1895 com apenas 7 anos de idade chegava a Vitória- ES, logo em seguida tomaram destino para região serrana de Santa Teresa-ES com seus pais, o irmão Luciano, a irmã Caterina e muitas outras famílias imigrantes que atravessaram o atlântico no navio Rosário. Nova terra, novo clima , nova língua , novas plantas, novas culturas… A adaptação de sua família em terras capixabas foi muito difícil e cheio de aventuras.\r\n\r\nAo chegarem no município encontraram a jabuticaba, uma fruta nativa da mata Atlântica existente na região, onde produziram vinhos para o consumo da família.\r\n\r\nPassou a tradição por gerações, chegando ao seu neto Atilio Mattielo, que fez surgir toda a tradição de seus antepassados, cultivando uvas para a vinificação.\r\n\r\nEm março de 1996, Viviane Mattiello, filha de Atilio Mattielo (neto), inaugurou a Cantina Mattiello, que alem de seus produtos próprios,  vinhos, licores, café torrado, sucos e geléias, trabalham com agro turismo, recebendo visitas às parreiras de uvas e proporcionando aos clientes a oportunidade de conhecer o processo de produção dos vinhos e degustação dos produtos ao final do tour.');
INSERT INTO `Pessoa` (`codPessoa`, `Empresa_codEmpresa`, `nome`, `email`) VALUES
(1, 1, 'Marvio Lucio Gomes', 'marvio@lucio.net'),
(3, 3, 'Void Spirit', 'phoenix@spirit.net');

