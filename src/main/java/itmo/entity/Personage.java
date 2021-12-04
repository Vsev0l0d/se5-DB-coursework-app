package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class Personage {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @OneToMany
    @JoinColumn(name = "blocking")
    private Collection<BlockList> blockLists;

    @OneToMany(mappedBy = "personage")
    private Collection<Clothing> clothing;

    @OneToMany(mappedBy = "personage")
    private Collection<Event> events;

    @OneToOne(mappedBy = "personage")
    private FairyPersonage fairyPersonage;

    @OneToMany(mappedBy = "personage")
    private Collection<Invitation> invitations;

    @ManyToOne
    @JoinColumn(name = "personage_type_id", referencedColumnName = "id", nullable = false)
    private PersonageType personageType;

    @OneToMany(mappedBy = "personage")
    private Collection<Prise> prises;

    @OneToMany(mappedBy = "personage")
    private Collection<Weapon> weapons;
}
