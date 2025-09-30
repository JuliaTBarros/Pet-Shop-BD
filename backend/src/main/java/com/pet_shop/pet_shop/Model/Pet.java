import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "pet")
public class Pet {

    @EmbeddedId
    private PetId id;

    @ManyToOne
    @MapsId("cpfCliente")
    @JoinColumn(name = "cpf_cliente", referencedColumnName = "cpf")
    private Cliente cliente;

    @Column(name = "especie", length = 30, nullable = false)
    private String especie;

    @Column(name = "raca", length = 50, nullable = false)
    private String raca;

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @Lob
    @Column(name = "observacoes")
    private String observacoes;

    public Pet() {}

    public Pet(PetId id, Cliente cliente, String especie, String raca, LocalDate dataNascimento, String observacoes) {
        this.id = id;
        this.cliente = cliente;
        this.especie = especie;
        this.raca = raca;
        this.dataNascimento = dataNascimento;
        this.observacoes = observacoes;
    }
}

@Embeddable
class PetId implements Serializable {

    @Column(name = "cpf_cliente", length = 11)
    private String cpfCliente;

    @Column(name = "nome_pet", length = 50)
    private String nomePet;

    public PetId() {}

    public PetId(String cpfCliente, String nomePet) {
        this.cpfCliente = cpfCliente;
        this.nomePet = nomePet;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PetId petId = (PetId) o;
        return Objects.equals(cpfCliente, petId.cpfCliente) &&
               Objects.equals(nomePet, petId.nomePet);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cpfCliente, nomePet);
    }
}