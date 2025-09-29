package com.pet_shop.pet_shop.Service;

import com.pet_shop.pet_shop.Model.Produto;
import com.pet_shop.pet_shop.Repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> getProdutoById(int id) {
        return produtoRepository.findById(id);
    }

    public Produto createProduto(Produto produto) {
        // Validações ou regras de negócio podem ser adicionadas aqui
        produtoRepository.save(produto);
        return produto;
    }

    public Optional<Produto> updateProduto(int id, Produto produtoDetails) {
        return produtoRepository.findById(id).map(produto -> {
            produto.setNome_produto(produtoDetails.getNome_produto());
            produto.setDescricao(produtoDetails.getDescricao());
            produto.setPreco_venda(produtoDetails.getPreco_venda());
            produto.setQuantidade_estoque(produtoDetails.getQuantidade_estoque());
            produto.setCnpjFornecedor(produtoDetails.getCnpjFornecedor());
            produtoRepository.update(produto);
            return produto;
        });
    }

    public boolean deleteProduto(int id) {
        if (produtoRepository.findById(id).isPresent()) {
            produtoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}