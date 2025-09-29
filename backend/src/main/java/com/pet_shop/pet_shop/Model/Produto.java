package com.pet_shop.pet_shop.Model;

import java.math.BigDecimal;

public class Produto {

    private Integer cod_produto;
    private String nome_produto;
    private String descricao;
    private BigDecimal preco_venda;
    private int quantidade_estoque;
    private String cnpjFornecedor;

    // Construtores
    public Produto() {
    }

    public Produto(Integer cod_produto, String nome_produto, String descricao, BigDecimal preco_venda, int quantidade_estoque, String cnpjFornecedor) {
        this.cod_produto = cod_produto;
        this.nome_produto = nome_produto;
        this.descricao = descricao;
        this.preco_venda = preco_venda;
        this.quantidade_estoque = quantidade_estoque;
        this.cnpjFornecedor = cnpjFornecedor;
    }

    // Getters e Setters
    public Integer getCod_produto() {
        return cod_produto;
    }

    public void setCod_produto(Integer cod_produto) {
        this.cod_produto = cod_produto;
    }

    public String getNome_produto() {
        return nome_produto;
    }

    public void setNome_produto(String nome_produto) {
        this.nome_produto = nome_produto;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getPreco_venda() {
        return preco_venda;
    }

    public void setPreco_venda(BigDecimal preco_venda) {
        this.preco_venda = preco_venda;
    }

    public int getQuantidade_estoque() {
        return quantidade_estoque;
    }

    public void setQuantidade_estoque(int quantidade_estoque) {
        this.quantidade_estoque = quantidade_estoque;
    }

    public String getCnpjFornecedor() {
        return cnpjFornecedor;
    }

    public void setCnpjFornecedor(String cnpjFornecedor) {
        this.cnpjFornecedor = cnpjFornecedor;
    }
}