import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "exame")
public class Exame {

    @EmbeddedId
    private ExameId id;

    @ManyToOne
    @MapsId("numConsulta")
    @JoinColumn(name = "num_consulta")
    private Consulta consulta;

    @Column(name = "data_solicitacao", nullable = false)
    private LocalDate dataSolicitacao;

    @Lob
    @Column(name = "resultado")
    private String resultado;
}

@Embeddable
class ExameId implements Serializable {

    @Column(name = "num_consulta")
    private Integer numConsulta;

    @Column(name = "nome_exame", length = 100)
    private String nomeExame;
    
    public ExameId() {}

    public ExameId(Integer numConsulta, String nomeExame) {
        this.numConsulta = numConsulta;
        this.nomeExame = nomeExame;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExameId exameId = (ExameId) o;
        return Objects.equals(numConsulta, exameId.numConsulta) &&
               Objects.equals(nomeExame, exameId.nomeExame);
    }

    @Override
    public int hashCode() {
        return Objects.hash(numConsulta, nomeExame);
    }
}