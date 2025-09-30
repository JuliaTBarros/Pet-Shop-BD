// Arquivo js/clientes.js

document.addEventListener('DOMContentLoaded', () => {
	const clienteModal = document.getElementById('cliente-modal');
	const openClienteModalBtn = document.getElementById('open-cliente-modal');
	const closeBtn = clienteModal.querySelector('.close-button');
	const formCliente = document.getElementById('form-cliente');
	const corpoTabela = document.getElementById('corpo-tabela-clientes');
	const modalTitle = clienteModal.querySelector('.modal-header h3');

	let editMode = false;
	let editCpf = null;

	const API_URL = 'http://localhost:8080/api/clientes';

	// Abre o modal para cadastro
	openClienteModalBtn.addEventListener('click', () => {
		editMode = false;
		formCliente.reset();
		modalTitle.textContent = 'Cadastrar Novo Cliente';
		document.getElementById('cpf').readOnly = false;
		clienteModal.style.display = 'flex';
	});

	// Fecha o modal
	closeBtn.addEventListener('click', () => {
		clienteModal.style.display = 'none';
	});

	// Fecha o modal ao clicar fora
	window.addEventListener('click', (event) => {
		if (event.target === clienteModal) {
			clienteModal.style.display = 'none';
		}
	});

	// Carregar clientes
	async function carregarClientes() {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Erro ao buscar clientes: ' + response.statusText);
			}
			const clientes = await response.json();
			corpoTabela.innerHTML = ''; // Limpa a tabela antes de preencher
			clientes.forEach((cliente) => {
				const tr = document.createElement('tr');
				tr.innerHTML = `
                    <td>${cliente.cpf}</td>
                    <td>${cliente.nome}</td>
                    <td>${new Date(cliente.dataCadastro).toLocaleString()}</td>
                    <td>${cliente.logradouro || ''}</td>
                    <td>${cliente.numero || ''}</td>
                    <td>${cliente.bairro || ''}</td>
                    <td>${cliente.cidade || ''}</td>
                    <td>${cliente.estado || ''}</td>
                    <td>${cliente.cep || ''}</td>
                    <td>${cliente.telefone1}</td>
                    <td>${cliente.telefone2 || ''}</td>
                    <td class="action-buttons">
                        <button class="btn-edit" data-cpf="${
													cliente.cpf
												}">Editar</button>
                        <button class="btn-delete" data-cpf="${
													cliente.cpf
												}">Excluir</button>
                    </td>
                `;
				corpoTabela.appendChild(tr);
			});
		} catch (error) {
			console.error('Falha ao carregar clientes:', error);
			alert('Não foi possível carregar os clientes.');
		}
	}

	// Salvar (cadastrar ou editar) cliente
	formCliente.addEventListener('submit', async (event) => {
		event.preventDefault();

		const formData = new FormData(formCliente);
		const clienteData = Object.fromEntries(formData.entries());

		// Limpa campos não preenchidos para não enviar strings vazias
		for (const key in clienteData) {
			if (clienteData[key] === '') {
				delete clienteData[key];
			}
		}

		const url = editMode ? `${API_URL}/${editCpf}` : API_URL;
		const method = editMode ? 'PUT' : 'POST';

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(clienteData),
			});

			const contentType = response.headers.get('content-type');
			if (!response.ok) {
				let errorMessage = 'Erro ao salvar cliente';
				if (contentType && contentType.includes('application/json')) {
					const errorData = await response.json();
					errorMessage = errorData.message || response.statusText;
				} else {
					errorMessage = await response.text() || response.statusText;
				}
				throw new Error(errorMessage);
			}

			alert(`Cliente ${editMode ? 'atualizado' : 'cadastrado'} com sucesso!`);
			clienteModal.style.display = 'none';
			carregarClientes(); // Recarrega a lista
		} catch (error) {
			console.error('Falha ao salvar cliente:', error);
			alert(`Não foi possível salvar o cliente: ${error.message}`);
		}
	});

	// Lógica para Editar e Excluir
	corpoTabela.addEventListener('click', async (event) => {
		const target = event.target;
		const cpf = target.dataset.cpf;

		if (target.classList.contains('btn-edit')) {
			// Ação de Editar
			editMode = true;
			editCpf = cpf;

			try {
				const response = await fetch(`${API_URL}/${cpf}`);
				if (!response.ok) {
					throw new Error('Cliente não encontrado.');
				}
				const cliente = await response.json();

				// Preenche o formulário
				document.getElementById('cpf').value = cliente.cpf;
				document.getElementById('cpf').readOnly = true; // CPF não pode ser editado
				document.getElementById('nome').value = cliente.nome;
				document.getElementById('telefone1').value = cliente.telefone1;
				document.getElementById('telefone2').value = cliente.telefone2 || '';
				document.getElementById('logradouro').value = cliente.logradouro || '';
				document.getElementById('numero').value = cliente.numero || '';
				document.getElementById('bairro').value = cliente.bairro || '';
				document.getElementById('cidade').value = cliente.cidade || '';
				document.getElementById('estado').value = cliente.estado || '';
				document.getElementById('cep').value = cliente.cep || '';

				modalTitle.textContent = 'Editar Cliente';
				clienteModal.style.display = 'flex';
			} catch (error) {
				console.error('Falha ao carregar dados para edição:', error);
				alert('Não foi possível carregar os dados do cliente para edição.');
			}
		} else if (target.classList.contains('btn-delete')) {
			// Ação de Excluir
			if (confirm(`Tem certeza que deseja excluir o cliente com CPF ${cpf}?`)) {
				try {
					const response = await fetch(`${API_URL}/${cpf}`, {
						method: 'DELETE',
					});

					if (response.ok || response.status === 204) {
						alert('Cliente excluído com sucesso!');
						carregarClientes(); // Recarrega a lista
					} else {
						const errorData = await response.json().catch(() => ({ 
							message: 'Ocorreu um erro ao tentar excluir o cliente.' 
						}));
						throw new Error(errorData.message || errorData.error || 'Erro ao excluir cliente.');
					}
				} catch (error) {
					console.error('Falha ao excluir cliente:', error);
					const errorMessage = error.message === 'Failed to fetch' 
						? 'Erro de conexão com o servidor. Verifique se o servidor está rodando.'
						: error.message;
					alert('Não foi possível excluir o cliente: ' + errorMessage);
				}
			}
		}
	});

	// Carrega os clientes ao iniciar
	carregarClientes();
});
