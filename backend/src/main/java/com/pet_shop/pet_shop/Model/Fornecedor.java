import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fornecedor")
public class Fornecedor {

    @Id
    @Column(name = "cnpj", length = 14)
    private String cnpj;

    @Column(name = "razao_social", length = 200, nullable = false)
    private String razaoSocial;

    @Column(name = "contato_principal", length = 100)
    private String contatoPrincipal;
}