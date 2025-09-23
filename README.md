# 🐾 Sistema de Gerenciamento de Pet Shop

> Status: Em Desenvolvimento 🚧

## 📝 Sobre o Projeto

Este é um projeto de um sistema de gerenciamento completo para um Pet Shop, desenvolvido como uma atividade prática para a disciplina de Banco de Dados. O objetivo principal é criar uma aplicação com dashboard que centraliza e organiza as informações de clientes, pets, produtos, serviços e vendas.

O sistema foi projetado para facilitar a gestão do negócio, permitindo o registro de transações e a análise de desempenho através de relatórios e um dashboard visual.

## ✨ Funcionalidades Principais

O sistema foi planejado para incluir os seguintes módulos e funcionalidades:

  * **Gestão de Clientes:**
      * Cadastro, consulta, atualização e exclusão de clientes.
      * Visualização do histórico de compras e serviços por cliente.
  * **Gestão de Pets:**
      * Cadastro de pets associados a um cliente (tutor).
      * Registro de informações como espécie, raça, data de nascimento e observações médicas.
      * Consulta e visualização do histórico de serviços do pet.
  * **Gestão de Produtos e Estoque:**
      * Cadastro de produtos com nome, descrição, preço e quantidade em estoque.
      * Atualização automática do estoque após a realização de uma venda.
  * **Gestão de Serviços:**
      * Cadastro dos serviços oferecidos pelo Pet Shop (banho, tosa, consultas).
      * Agendamento de serviços para os pets.
  * **Módulo de Vendas (PDV):**
      * Registro de novas vendas, incluindo produtos e serviços.
        Cálculo do valor total e seleção da forma de pagamento.
  * **Dashboard e Relatórios:**
      * Painel visual com os principais indicadores de desempenho do negócio (faturamento, atendimentos, etc.).
      * Geração de relatórios para identificar os produtos e serviços mais populares e o perfil dos clientes mais frequentes.

## 🛠️ Tecnologias Utilizadas

  * **Backend:**
      * Java
      * Servlets
      * JDBC (Java Database Connectivity)
  * **Frontend:**
      * HTML5
      * CSS3
      * JavaScript
  * **Servidor de Aplicação:**
      * Apache Tomcat
  * **Banco de Dados:**
      * MySQL

### Requisito Chave do Projeto

Este projeto segue um requisito acadêmico específico de **não utilizar frameworks ou bibliotecas de mapeamento objeto-relacional (ORM)**, como Hibernate, JPA, etc.. Toda a camada de persistência de dados é implementada com comandos SQL puros enviados ao banco de dados através do JDBC.

## 🚀 Como Executar o Projeto

*(Esta seção pode ser preenchida com as instruções detalhadas posteriormente)*

#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

  * JDK (Java Development Kit)
  * Apache Tomcat
  * Um SGBD de sua preferência (ex: PostgreSQL)
  * IDE de sua preferência (ex: Eclipse, IntelliJ)

#### Rodando a Aplicação

```bash
# Clone este repositório
$ git clone https://github.com/JuliaTBarros/Pet-Shop-BD

# Importe o projeto na sua IDE

# Configure a conexão com o banco de dados (detalhar o arquivo e as variáveis)

# Execute o script SQL para criar as tabelas do banco

# Inicie o servidor Tomcat e faça o deploy da aplicação
```

## 👥 Equipe

| Nome do Integrante |
| :---: |
| Henrique Figueirêdo Tefile |
| Julia Torres de Barros |
| Maria Clara Neves |
| Vinícius Bernardo da Silva |
