// Arquivo js/produtos.js

document.addEventListener('DOMContentLoaded', () => {
	const produtoModal = document.getElementById('produto-modal');
	const openProdutoModalBtn = document.getElementById('open-produto-modal');
	const closeBtn = produtoModal.querySelector('.close-button');
	const formProduto = document.getElementById('form-produto');
	const corpoTabela = document.getElementById('corpo-tabela-produtos');
	const modalTitle = produtoModal.querySelector('.modal-header h3');

	let editMode = false;
	let editId = null;

	const API_URL = 'http://localhost:8080/produtos';

	// Abre o modal para cadastro
	openProdutoModalBtn.addEventListener('click', () => {
		editMode = false;
		formProduto.reset();
		modalTitle.textContent = 'Cadastrar Novo Produto';
		produtoModal.style.display = 'flex';
	});

	// Fecha o modal
	closeBtn.addEventListener('click', () => {
		produtoModal.style.display = 'none';
	});

	// Fecha o modal ao clicar fora
	window.addEventListener('click', (event) => {
		if (event.target === produtoModal) {
			produtoModal.style.display = 'none';
		}
	});

	// Carregar produtos
	async function carregarProdutos() {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Erro ao buscar produtos: ' + response.statusText);
			}
			const produtos = await response.json();
			corpoTabela.innerHTML = ''; // Limpa a tabela
			produtos.forEach((produto) => {
				const tr = document.createElement('tr');
				tr.innerHTML = `
                    <td>${produto.codProduto}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.descricao || ''}</td>
                    <td>R$ ${parseFloat(produto.precoVenda).toFixed(2)}</td>
                    <td>${produto.quantidadeEstoque}</td>
                    <td>${produto.cnpjFornecedor}</td>
                    <td class="action-buttons">
                        <button class="btn-edit" data-id="${
													produto.codProduto
												}">Editar</button>
                        <button class="btn-delete" data-id="${
													produto.codProduto
												}">Excluir</button>
                    </td>
                `;
				corpoTabela.appendChild(tr);
			});
		} catch (error) {
			console.error('Falha ao carregar produtos:', error);
			alert('Não foi possível carregar os produtos.');
		}
	}

	// Salvar (cadastrar ou editar) produto
	formProduto.addEventListener('submit', async (event) => {
		event.preventDefault();

		const formData = new FormData(formProduto);
		const produtoData = {
			nomeProduto: formData.get('nome_produto'),
			descricao: formData.get('descricao'),
			precoVenda: parseFloat(formData.get('preco_venda')),
			quantidadeEstoque: parseInt(formData.get('quantidade_estoque')),
			cnpjFornecedor: formData.get('cnpjFornecedor'),
		};

		const url = editMode ? `${API_URL}/${editId}` : API_URL;
		const method = editMode ? 'PUT' : 'POST';

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(produtoData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					`Erro ao salvar produto: ${errorData.message || response.statusText}`
				);
			}

			alert(`Produto ${editMode ? 'atualizado' : 'cadastrado'} com sucesso!`);
			produtoModal.style.display = 'none';
			carregarProdutos(); // Recarrega a lista
		} catch (error) {
			console.error('Falha ao salvar produto:', error);
			alert(`Não foi possível salvar o produto. ${error.message}`);
		}
	});

	// Lógica para Editar e Excluir
	corpoTabela.addEventListener('click', async (event) => {
		const target = event.target;
		const id = target.dataset.id;

		if (target.classList.contains('btn-edit')) {
			// Ação de Editar
			editMode = true;
			editId = id;

			try {
				const response = await fetch(`${API_URL}/${id}`);
				if (!response.ok) {
					throw new Error('Produto não encontrado.');
				}
				const produto = await response.json();

				// Preenche o formulário
				document.getElementById('nome_produto').value = produto.nomeProduto;
				document.getElementById('descricao').value = produto.descricao || '';
				document.getElementById('preco_venda').value = produto.precoVenda;
				document.getElementById('quantidade_estoque').value =
					produto.quantidadeEstoque;
				document.getElementById('cnpjFornecedor').value =
					produto.cnpjFornecedor;

				modalTitle.textContent = 'Editar Produto';
				produtoModal.style.display = 'flex';
			} catch (error) {
				console.error('Falha ao carregar dados para edição:', error);
				alert('Não foi possível carregar os dados do produto para edição.');
			}
		} else if (target.classList.contains('btn-delete')) {
			// Ação de Excluir
			if (
				confirm(`Tem certeza que deseja excluir o produto com código ${id}?`)
			) {
				try {
					const response = await fetch(`${API_URL}/${id}`, {
						method: 'DELETE',
					});

					if (!response.ok) {
						throw new Error('Erro ao excluir produto.');
					}

					alert('Produto excluído com sucesso!');
					carregarProdutos(); // Recarrega a lista
				} catch (error) {
					console.error('Falha ao excluir produto:', error);
					alert('Não foi possível excluir o produto.');
				}
			}
		}
	});

	// Carrega os produtos ao iniciar
	carregarProdutos();
});
