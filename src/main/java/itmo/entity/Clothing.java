package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Clothing {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @Basic
    @Column
    private String type;

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private Personage personage;
}
