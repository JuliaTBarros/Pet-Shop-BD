import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "veterinario")
@PrimaryKeyJoinColumn(name = "cod_funcionario")
public class Veterinario extends Funcionario {

    @Column(name = "CRMV", length = 10, nullable = false, unique = true)
    private String crmv;
}