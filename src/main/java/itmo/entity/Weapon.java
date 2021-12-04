package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Objects;

@Data
@Entity
public class Weapon {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @Basic
    @Column
    private int damage;

    @Basic
    @Column
    private String type;

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private Personage personage;
}
