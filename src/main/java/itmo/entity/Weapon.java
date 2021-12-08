package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Weapon {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
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

    @Column(name = "owner_id")
    private int ownerId;
}
