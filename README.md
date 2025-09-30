<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Sistema de Gestão para Pet Shop</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; 
            line-height: 1.6; 
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 { 
            border-bottom: 1px solid #eaecef; 
            padding-bottom: 0.3em;
        }
        code { 
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
            background-color: #f6f8fa;
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            border-radius: 6px;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            overflow: auto;
            border-radius: 6px;
        }
        pre code {
            padding: 0;
            margin: 0;
            background-color: transparent;
        }
        ul {
            padding-left: 20px;
        }
        img {
            margin-right: 5px;
        }
    </style>
</head>
<body>

    <h1>Sistema de Gestão para Pet Shop</h1>

    <p>
        <img src="https://img.shields.io/badge/status-em--desenvolvimento-yellow" alt="Status do Projeto">
        <img src="https://img.shields.io/badge/java-17%2B-blue" alt="Java">
        <img src="https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen" alt="Spring Boot">
        <img src="https://img.shields.io/badge/build-Maven-red" alt="Maven">
    </p>

    <h2>📄 Descrição do Projeto</h2>
    <p>
        Este projeto consiste no desenvolvimento do backend para um sistema de gestão de Pet Shop. O objetivo é criar uma aplicação robusta para modelar e gerenciar as principais operações do negócio, como cadastro de clientes, pets, funcionários e controle de vendas e consultas.
    </p>
    <p>
        O sistema está sendo construído com foco em uma arquitetura limpa, utilizando classes de modelo (POJOs) para representar as entidades do domínio, servindo como base para a implementação das regras de negócio e da camada de persistência.
    </p>

    <h2>✨ Entidades Modeladas</h2>
    <p>O núcleo do sistema é composto pelas seguintes entidades de domínio:</p>
    <ul>
        <li><strong>Cliente</strong>: Donos dos animais de estimação.</li>
        <li><strong>Pet</strong>: Animais de estimação dos clientes.</li>
        <li><strong>Funcionario</strong>: Classe base para os colaboradores do Pet Shop.
            <ul>
                <li><strong>Veterinario</strong>: Funcionário com especialização veterinária (CRMV).</li>
                <li><strong>Atendente</strong>: Funcionário responsável pelo atendimento geral.</li>
            </ul>
        </li>
        <li><strong>Fornecedor</strong>: Empresas que fornecem produtos para o Pet Shop.</li>
        <li><strong>Venda</strong>: Registros de transações comerciais.</li>
        <li><strong>Consulta</strong>: Registros de atendimentos veterinários.</li>
        <li><strong>Exame</strong>: Exames solicitados durante uma consulta.</li>
    </ul>

    <h2>🛠️ Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Java 17</strong>: Linguagem de programação principal.</li>
        <li><strong>Spring Boot</strong>: Framework para criação da aplicação e serviços web.</li>
        <li><strong>Maven</strong>: Ferramenta para gerenciamento de dependências e build do projeto.</li>
    </ul>

    <h2>📁 Estrutura do Projeto</h2>
    <p>O projeto segue a estrutura padrão do Maven, com o código-fonte localizado em <code>src/main/java</code>. As principais pastas são:</p>
    <ul>
        <li><code>com.pet_shop.pet_shop.Model</code>: Contém as classes de domínio (POJOs) que representam as entidades do sistema, como <code>Cliente</code>, <code>Pet</code>, <code>Funcionario</code>, etc.</li>
        <li><code>com.pet_shop.pet_shop.Controller</code>: (A ser criado) Responsável por expor os endpoints da API REST.</li>
        <li><code>com.pet_shop.pet_shop.Service</code>: (A ser criado) Onde a lógica de negócio será implementada.</li>
        <li><code>com.pet_shop.pet_shop.Repository</code>: (A ser criado) Camada de acesso a dados (interação com o banco de dados).</li>
    </ul>

    <h2>🚀 Como Começar</h2>
    <p>Siga os passos abaixo para clonar e executar o projeto em seu ambiente local.</p>
    <h3>Pré-requisitos</h3>
    <ul>
        <li><strong>JDK 17</strong> ou superior.</li>
        <li><strong>Apache Maven</strong> instalado e configurado.</li>
        <li>Uma IDE de sua preferência (ex: IntelliJ IDEA, VS Code com extensões Java, Eclipse).</li>
    </ul>
    <h3>Passos</h3>
    <ol>
        <li><strong>Clone o repositório:</strong>
            <pre><code>git clone https://github.com/JuliaTBarros/Pet-Shop-BD.git</code></pre>
        </li>
        <li><strong>Navegue até o diretório do projeto:</strong>
            <pre><code>cd Pet-Shop-BD</code></pre>
        </li>
        <li><strong>Compile o projeto com o Maven:</strong>
            <p>(Este passo irá baixar todas as dependências)</p>
            <pre><code>mvn clean install</code></pre>
        </li>
        <li><strong>Execute a aplicação:</strong>
            <pre><code>mvn spring-boot:run</code></pre>
        </li>
    </ol>
    <p>Após a execução, a aplicação estará rodando e pronta para receber requisições (assim que os Controllers forem implementados).</p>

    <h2>👩‍💻 Autora</h2>
    <p>
        <strong>Júlia T. Barros</strong><br>
        <strong>Maria Clara Neves</strong><br>
        <strong>Vinícius Bernardo</strong><br>
        <strong>Henrique Figueireido</strong>
    </p>

</body>
</html>
