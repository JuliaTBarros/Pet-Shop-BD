// Define a URL base da sua API de produtos
const apiUrl = 'http://localhost:8080/api/produtos';

/**
 * Função assíncrona para buscar os produtos da API e preencher a tabela.
 */
async function carregarProdutos() {
    try {
        // Faz a requisição GET para a API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos: ' + response.statusText);
        }
        const produtos = await response.json();

        // Pega o corpo da tabela
        const tabelaBody = document.getElementById('corpo-tabela-produtos');

        // Limpa a tabela antes de preencher
        tabelaBody.innerHTML = '';

        // Preenche a tabela com os dados
        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produto.cod_produto}</td>
                <td>${produto.nome_produto}</td>
                <td>${produto.descricao || '-'}</td>
                <td>${produto.preco_venda.toFixed(2)}</td>
                <td>${produto.quantidade_estoque}</td>
                <td>${produto.cnpjFornecedor}</td>
                <td class="action-buttons">
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Excluir</button>
                </td>
            `;
            tabelaBody.appendChild(tr);
        });

    } catch (error) {
        console.error('Falha ao carregar produtos:', error);
        alert('Falha ao carregar produtos do backend. Verifique se o backend está rodando.');
    }
}

/**
 * Função para lidar com o envio (submit) do formulário de cadastro.
 */
async function handleFormSubmit(event) {
    // Impede o recarregamento padrão da página
    event.preventDefault();

    const form = event.target;
    const modal = document.getElementById('produto-modal');

    // Coleta os dados do formulário
    const formData = new FormData(form);
    const produtoData = Object.fromEntries(formData.entries());

    try {
        // Envia os dados para a API (POST)
        const response = await fetch(apiUrl, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(produtoData)
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar produto.');
        }

        // Se o cadastro for bem-sucedido:
        alert('Produto cadastrado com sucesso!');
        form.reset(); // Limpa o formulário
        modal.classList.remove('active'); // Fecha o modal
        carregarProdutos(); // Recarrega a tabela de produtos

    } catch (error) {
        console.error('Falha ao cadastrar produto:', error);
        alert('Falha ao cadastrar produto. Verifique os dados e tente novamente.');
    }
}

// --- Execução ---

// Adiciona os "escutadores de eventos" quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carrega os produtos na tabela assim que a página é aberta
    carregarProdutos();

    // 2. Adiciona o listener para o formulário de cadastro
    const formProduto = document.getElementById('form-produto');
    if (formProduto) {
        formProduto.addEventListener('submit', handleFormSubmit);
    }
});