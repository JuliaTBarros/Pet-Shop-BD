document.addEventListener('DOMContentLoaded', () => {
	const queryButtons = document.querySelectorAll('.botoes-consulta button');
	const queryInput = document.getElementById('sql-query-input');
	const executeBtn = document.getElementById('executar-query-btn');
	const resultOutput = document.getElementById('resultado-output');

	// Adiciona evento de clique para os botões de consulta pré-definidas.
	// A função deles é apenas preencher a caixa de texto.
	queryButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const query = button.getAttribute('data-query');
			queryInput.value = query;
		});
	});

	// Adiciona evento de clique para o botão de executar.
	// Ele pega o que estiver na caixa de texto e executa.
	executeBtn.addEventListener('click', () => {
		const query = queryInput.value.trim();
		if (query) {
			executeQuery(query);
		} else {
			alert('A caixa de texto da consulta está vazia.');
		}
	});

	/**
	 * Função para executar a consulta.
	 * Na versão final, esta função fará uma chamada 'fetch' para o backend.
	 * @param {string} query - A string da query SQL a ser executada.
	 */
	async function executeQuery(query) {
		resultOutput.innerHTML = `<p>Executando...</p>`;

		// --- SIMULAÇÃO DE CHAMADA AO BACKEND ---
		console.log('Enviando para o backend a seguinte query:', query);

		await new Promise((resolve) => setTimeout(resolve, 500)); // Simula atraso de rede

		// Dados de exemplo como resposta (o backend retornaria algo assim)
		const mockData = [
			{ id: 1, produto: 'Ração Seca', categoria: 'Alimento', estoque: 50 },
			{
				id: 2,
				produto: 'Arranhador Gatos',
				categoria: 'Acessório',
				estoque: 8,
			},
			{ id: 3, produto: 'Coleira', categoria: 'Acessório', estoque: 15 },
		];

		if (mockData.length > 0) {
			renderTable(mockData);
		} else {
			resultOutput.innerHTML = '<p>Nenhum resultado encontrado.</p>';
		}
		// --- FIM DA SIMULAÇÃO ---
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
			tableHtml += `<th>${header.replace(/_/g, ' ').toUpperCase()}</th>`;
		});
		tableHtml += '</tr></thead>';

		// Corpo da tabela
		tableHtml += '<tbody>';
		data.forEach((row) => {
			tableHtml += '<tr>';
			headers.forEach((header) => {
				tableHtml += `<td>${row[header] === null ? '-' : row[header]}</td>`;
			});
			tableHtml += '</tr>';
		});
		tableHtml += '</tbody></table>';

		resultOutput.innerHTML = tableHtml;
	}
});
