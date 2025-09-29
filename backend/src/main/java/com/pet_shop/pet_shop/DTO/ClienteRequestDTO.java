package com.pet_shop.pet_shop.DTO;
import lombok.*;

@Getter
@Setter
public class ClienteRequestDTO {
    private String cpf;
    private String nome;
    private String logradouro;
    private String numero;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
    private String telefone1;
    private String telefone2;
}
