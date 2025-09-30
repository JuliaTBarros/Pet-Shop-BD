import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "venda")
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_venda")
    private Integer numVenda;

    @Column(name = "data_hora", nullable = false)
    private LocalDateTime dataHora;

    @Column(name = "valor_total", precision = 10, scale = 2, nullable = false)
    private BigDecimal valorTotal;

    @Column(name = "forma_pagamento", length = 50, nullable = false)
    private String formaPagamento;

    @ManyToOne
    @JoinColumn(name = "cpf_cliente", referencedColumnName = "cpf", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "cod_funcionario", referencedColumnName = "cod_funcionario", nullable = false)
    private Funcionario funcionario;
}