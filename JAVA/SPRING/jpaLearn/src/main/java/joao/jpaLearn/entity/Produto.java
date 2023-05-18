package joao.jpaLearn.entity;

import jakarta.persistence.*;
import joao.jpaLearn.records.ProdutoDado;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    Cliente dono;
    private String nome;
    private String descricao;
    private Integer quantidade;
    public Produto(){};
    public Produto(ProdutoDado produtoDado) {
        this.nome = produtoDado.nome();
        this.descricao = produtoDado.descricao();
        this.quantidade = produtoDado.quantidade();
    }
}
