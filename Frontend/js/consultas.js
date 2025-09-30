document.addEventListener('DOMContentLoaded', () => {
    const queryButtons = document.querySelectorAll('.botoes-consulta button');
    const queryInput = document.getElementById('sql-query-input');
    const executeBtn = document.getElementById('executar-query-btn');
    const resultOutput = document.getElementById('resultado-output');

    // URL novo endpoint no backend
    const apiUrl = 'http://localhost:8080/api/consultas/executar';

    // Adiciona evento de clique para os botões de consulta pré-definidas.
    queryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const query = button.getAttribute('data-query');
            queryInput.value = query;
        });
    });

    // Adiciona evento de clique para o botão de executar.
    executeBtn.addEventListener('click', () => {
        const query = queryInput.value.trim();
        if (query) {
            executeQuery(query);
        } else {
            alert('A caixa de texto da consulta está vazia.');
        }
    });

    /**
     * Função para executar a consulta fazendo uma chamada 'fetch' para o backend.
     * @param {string} query - A string da query SQL a ser executada.
     */
    async function executeQuery(query) {
        resultOutput.innerHTML = `<p>Executando...</p>`;

        try {
            // Prepara a requisição para a API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query }), // Envia a query no corpo da requisição
            });

            // Verifica se a requisição foi bem-sucedida
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Erro ao executar a consulta.');
            }

            const data = await response.json();

            // Renderiza os dados na tabela
            if (data.length > 0) {
                renderTable(data);
            } else {
                resultOutput.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            }

        } catch (error) {
            console.error('Falha ao executar consulta:', error);
            resultOutput.innerHTML = `<p style="color: red;"><b>Erro:</b> ${error.message}</p>`;
        }
    }

    /**
     * Renderiza um array de objetos como uma tabela HTML.
     * @param {Array<Object>} data - Os dados a serem exibidos.
     */
    function renderTable(data) {
        if (!data || data.length === 0) {
            resultOutput.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            return;
        }

        const headers = Object.keys(data[0]);
        let tableHtml = '<table class="data-table">';

        // Cabeçalho da tabela
        tableHtml += '<thead><tr>';
        headers.forEach((header) => {
            // Transforma nomes_de_coluna em Nomes De Coluna
            const formattedHeader = header.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            tableHtml += `<th>${formattedHeader}</th>`;
        });
        tableHtml += '</tr></thead>';

        // Corpo da tabela
        tableHtml += '<tbody>';
        data.forEach((row) => {
            tableHtml += '<tr>';
            headers.forEach((header) => {
                const value = row[header];
                // Formata a data se for uma string no formato ISO 8601
                 if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
                    tableHtml += `<td>${new Date(value).toLocaleString('pt-BR')}</td>`;
                } else {
                    tableHtml += `<td>${value === null ? '-' : value}</td>`;
                }
            });
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';

        resultOutput.innerHTML = tableHtml;
    }
});