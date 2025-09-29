// js/consultas.js

document.addEventListener('DOMContentLoaded', () => {
	const queryButtons = document.querySelectorAll('.botoes-consulta button');
	const queryInput = document.getElementById('sql-query-input');
	const executeBtn = document.getElementById('executar-query-btn');
	const resultOutput = document.getElementById('resultado-output');

	// Adiciona evento de clique para os botões de consulta pré-definidas
	queryButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const query = button.getAttribute('data-query');
			queryInput.value = query;
		});
	});

	// Adiciona evento de clique para o botão de executar
	executeBtn.addEventListener('click', () => {
		const query = queryInput.value.trim();
		if (query) {
			// AQUI VOCÊ FARIA A CHAMADA PARA O BACKEND
			// Por enquanto, vamos simular a resposta
			displayResults(
				`Executando a query: "${query}"... (Funcionalidade de backend a ser implementada)`
			);
		} else {
			alert('Por favor, digite ou selecione uma consulta SQL.');
		}
	});

	function displayResults(data) {
		// Esta função irá, no futuro, renderizar uma tabela com os dados do backend
		resultOutput.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
	}
});
