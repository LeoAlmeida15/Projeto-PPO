**1. Requisitos do Sistema**
Requisitos Funcionais

São as funções que o sistema deverá realizar:

**RF01 – Cadastro de receitas**
O sistema deverá permitir o cadastro de novas receitas, contendo informações como nome, ingredientes, modo de preparo, categoria e imagem.

**RF02 – Visualização de receitas**
O usuário deverá conseguir visualizar as receitas cadastradas e seus respectivos ingredientes e modo de preparo.

**RF03 – Pesquisa de receitas**
O sistema deverá permitir que o usuário pesquise receitas pelo nome ou por palavras relacionadas.

**RF04 – Categorias**
O sistema deverá organizar as receitas em categorias, como doces, salgados e outras opções.

**RF05 – Favoritos**
O sistema deverá permitir que o usuário salve receitas favoritas para acessá-las posteriormente.

**RF06 – Comentários**
O sistema poderá permitir que os usuários façam comentários nas receitas.

**RF07 – Contato**
O sistema deverá disponibilizar uma página de contato para que o usuário possa enviar mensagens.

**RF08 – Dicas culinárias**
O sistema deverá apresentar dicas relacionadas ao preparo dos alimentos e à economia doméstica.

**RF09 – Informações sobre ingredientes**
O sistema deverá apresentar informações e orientações relacionadas aos ingredientes utilizados nas receitas.

**RF10 – Navegação entre páginas**
O sistema deverá permitir a navegação entre as páginas Início, Receitas, Categorias e Contato, previstas no planejamento do projeto.

**2. Requisitos Não Funcionais**

São características de qualidade e funcionamento do sistema.

**RNF01 – Responsividade**
O site deverá funcionar adequadamente em computadores, tablets e celulares.

**RNF02 – Usabilidade**
A interface deverá ser simples, clara e fácil de utilizar, considerando que o público possui apenas conhecimentos básicos de navegação na internet.

**RNF03 – Acessibilidade**
O sistema deverá utilizar bom contraste de cores e possibilitar recursos como letras ampliadas.

**RNF04 – Desempenho**
As páginas deverão carregar de maneira rápida, evitando excesso de elementos que possam prejudicar o desempenho.

**RNF05 – Banco de dados**
As informações das receitas deverão ser armazenadas e organizadas utilizando o PostgreSQL.

**RNF06 – Compatibilidade**
O site deverá funcionar nos principais navegadores modernos.

**RNF07 – Manutenção**
O sistema deverá permitir a atualização e inclusão de novas receitas de forma organizada.

**RNF08 – Segurança**
Os dados enviados pelos usuários deverão ser tratados de maneira adequada, evitando o armazenamento desnecessário de informações pessoais.

O briefing também define que, caso o usuário queira comentar ou salvar receitas, poderão ser solicitados nome e e-mail para identificação e comunicação.

**3. Elaboração do Sistema**
**3.1 Descrição geral**

O sistema Receitas Fáceis e Econômicas será um site informativo e interativo destinado a pessoas que procuram receitas simples, rápidas e acessíveis. O objetivo é facilitar o preparo de refeições caseiras, principalmente para pessoas com pouca experiência na cozinha.

O site disponibilizará receitas doces e salgadas, dicas culinárias, informações sobre ingredientes, sugestões para diferentes ocasiões e passo a passo detalhado.

**3.2 Público-alvo**

O sistema será direcionado principalmente para:

Jovens;
Estudantes;
Adultos;
Pessoas com pouca experiência na cozinha;
Pessoas que procuram receitas rápidas e econômicas.

O público busca principalmente facilidade, economia e rapidez no preparo dos alimentos.

**3.3 Estrutura do sistema**

O sistema poderá ser dividido nas seguintes páginas:

**Início**

Apresentação do site;
Receitas em destaque;
Busca de receitas;
Categorias.

**Receitas**

Lista de receitas;
Nome da receita;
Imagem;
Tempo de preparo;
Ingredientes;
Modo de preparo.

**Categorias**

Doces;
Salgados;
Receitas rápidas;
Receitas econômicas;
Outras categorias.

**Contato**

Nome;
E-mail;
Mensagem;
Botão para envio.

Essas páginas estão previstas no planejamento original do projeto.

**3.4 Tecnologias utilizadas**
Tecnologia	Utilização
HTML	Estrutura das páginas
CSS	Estilização e layout
JavaScript	Interatividade e funcionalidades
PostgreSQL	Armazenamento dos dados
Visual Studio Code	Desenvolvimento do projeto

Essas são as ferramentas e tecnologias definidas no documento do projeto.

**3.5 Banco de dados**

O PostgreSQL poderá armazenar informações como:

**Tabela Usuário**

id_usuario
nome
email

**Tabela Receita**

id_receita
nome
descrição
ingredientes
modo_preparo
categoria
imagem
tempo_preparo

**Tabela Comentário**

id_comentario
id_usuario
id_receita
comentário
data

**Tabela Favoritos**

id_favorito
id_usuario
id_receita
