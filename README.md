# Projeto Integrado: Sistema de Gerenciamento com Dashboard

Este projeto foi desenvolvido para atender aos requisitos das disciplinas de **Banco de Dados** e **Estatística e Probabilidade**. O objetivo é criar um sistema completo para gerenciar informações de um cenário específico ("minimundo"), apresentando os dados através de uma interface web funcional com um dashboard integrado.

## 🏛️ Arquitetura

O sistema é construído sobre uma arquitetura **Cliente-Servidor desacoplada**:

* **Backend (API REST):** Desenvolvido em **Java** com o micro-framework **Javalin**. É responsável por toda a lógica de negócios e pela comunicação com o banco de dados via **JDBC puro**, sem o uso de frameworks ORM.
* **Frontend (Aplicação Web):** Construído com **HTML, CSS e JavaScript (Vanilla JS)**. Consome os dados da API REST de forma assíncrona para criar uma experiência de usuário dinâmica e interativa.

## ✨ Features

* **Gerenciamento de Dados (CRUD):** Interface para realizar operações de Inserção, Leitura, Alteração e Deleção em pelo menos 2 tabelas do banco de dados.
* **Visualização de Dados:** Exibição de dados tabulares e resultados de consultas personalizadas.
* **Consultas Avançadas:** Implementação e visualização de pelo menos 4 consultas SQL distintas, incluindo ao menos uma com `JOIN`.
* **Dashboard de Estatística:** Uma seção dedicada à exibição dos gráficos (dispersão, histogramas, pizza) gerados para o trabalho da disciplina de Estatística e Probabilidade.

## 🛠️ Tecnologias Utilizadas

**Backend:**

* Java (JDK 11+)
* Javalin (Servidor web leve)
* Gson (Manipulação de JSON)
* JDBC Driver (para o SGBD escolhido)
* Maven (Gerenciador de dependências)

**Frontend:**

* HTML5
* CSS3
* JavaScript (ES6+)

**Banco de Dados:**

* MySQL

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Java JDK 11 ou superior instalado.
* Apache Maven instalado.
* Um SGBD compatível instalado e em execução.

### 1. Configuração do Banco de Dados

1. Crie um novo banco de dados no seu SGBD.
2. Execute os scripts SQL localizados na pasta `/sql` para criar as tabelas (`criação.sql`) e inserir os dados iniciais (`inserção.sql`).
3. Configure as credenciais de acesso ao banco de dados no arquivo de configuração do backend.

### 2. Executando o Backend (API)

1. Navegue até a pasta do projeto backend.
2. Compile o projeto:

    ```bash
    mvn clean install
    ```

3. Execute a aplicação:

    ```bash
    java -jar target/nome-do-seu-artefato.jar
    ```

4. O servidor da API estará rodando em `http://localhost:7070`.

### 3. Executando o Frontend

1. Navegue até a pasta do projeto frontend.
2. A maneira mais fácil de servir os arquivos é utilizando uma extensão como o **Live Server** para o VS Code.
3. Alternativamente, basta abrir o arquivo `index.html` diretamente no seu navegador.

## 📋 Endpoints da API

| Verbo  | Endpoint           | Descrição                                 |
| :----- | :----------------- | :---------------------------------------- |
| `GET`  | `/api/tabela1`     | Retorna todos os registros da Tabela 1.   |
| `POST` | `/api/tabela1`     | Cria um novo registro na Tabela 1.        |
| `PUT`  | `/api/tabela1/{id}`| Atualiza um registro existente.           |
| `DELETE`| `/api/tabela1/{id}`| Deleta um registro específico.            |
| ...    | ...                | (adicionar outros endpoints aqui)         |

## 👥 Equipe

* Henrique Figuêiredo Tefile
* Julia Torres de Barros
* Maria Clara Neves
* Vinícius Bernardo da Silva
