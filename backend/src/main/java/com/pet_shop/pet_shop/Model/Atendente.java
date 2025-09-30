import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "atendente")
@PrimaryKeyJoinColumn(name = "cod_funcionario")
public class Atendente extends Funcionario {
}