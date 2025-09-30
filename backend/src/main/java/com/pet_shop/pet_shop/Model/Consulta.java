import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "consulta")
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_consulta")
    private Integer numConsulta;

    @Column(name = "data_hora", nullable = false)
    private LocalDateTime dataHora;

    @Lob
    @Column(name = "sintomas_relatados")
    private String sintomasRelatados;

    @Lob
    @Column(name = "diagnostico")
    private String diagnostico;

    @ManyToOne
    @JoinColumns({
        @JoinColumn(name = "cpf_cliente_pet", referencedColumnName = "cpf_cliente", nullable = false),
        @JoinColumn(name = "nome_pet", referencedColumnName = "nome_pet", nullable = false)
    })
    private Pet pet;

    @ManyToOne
    @JoinColumn(name = "cod_veterinario", referencedColumnName = "cod_funcionario", nullable = false)
    private Veterinario veterinario;
}