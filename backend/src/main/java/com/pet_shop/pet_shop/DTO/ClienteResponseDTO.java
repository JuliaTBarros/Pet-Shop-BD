package com.pet_shop.pet_shop.DTO;

import java.time.LocalDateTime;

import com.pet_shop.pet_shop.Model.Cliente;

public class ClienteResponseDTO {
    private String cpf;
    private String nome;
    private LocalDateTime dataCadastro;
    private String telefone1;
    private String telefone2;
    private String cidade;

    public ClienteResponseDTO(Cliente cliente) {
        this.cpf = cliente.getCpf();
        this.nome = cliente.getNome();
        this.dataCadastro = cliente.getDataCadastro();
        this.telefone1 = cliente.getTelefone1();
        this.telefone2 = cliente.getTelefone2();
        this.cidade = cliente.getCidade();
    }

    public String getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public String getTelefone1() {
        return telefone1;
    }

    public String getTelefone2() {
        return telefone2;
    }

    public String getCidade() {
        return cidade;
    }
}
