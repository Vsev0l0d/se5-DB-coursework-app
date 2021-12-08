package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class Personage {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "personage_type_id", referencedColumnName = "id", nullable = false)
    private PersonageType personageType;
}
