// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
	// --- Lógica para o Modal de Clientes ---
	const openClienteModalBtn = document.getElementById('open-cliente-modal');
	const clienteModal = document.getElementById('cliente-modal');

	if (openClienteModalBtn && clienteModal) {
		const closeClienteBtn = clienteModal.querySelector('.close-button');

		// Abre o modal ao clicar em "Cadastrar Novo Cliente"
		openClienteModalBtn.addEventListener('click', () => {
			clienteModal.classList.add('active');
		});

		// Fecha o modal ao clicar no 'X'
		closeClienteBtn.addEventListener('click', () => {
			clienteModal.classList.remove('active');
		});

		// Fecha o modal ao clicar fora dele (no overlay)
		clienteModal.addEventListener('click', (event) => {
			if (event.target === clienteModal) {
				clienteModal.classList.remove('active');
			}
		});
	}

	// --- Lógica para o Modal de Produtos (exemplo) ---
	const openProdutoModalBtn = document.getElementById('open-produto-modal');
	const produtoModal = document.getElementById('produto-modal');

	if (openProdutoModalBtn && produtoModal) {
		const closeProdutoBtn = produtoModal.querySelector('.close-button');

		openProdutoModalBtn.addEventListener('click', () => {
			produtoModal.classList.add('active');
		});

		closeProdutoBtn.addEventListener('click', () => {
			produtoModal.classList.remove('active');
		});

		produtoModal.addEventListener('click', (event) => {
			if (event.target === produtoModal) {
				produtoModal.classList.remove('active');
			}
		});
	}
});
