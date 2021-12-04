package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
@Table(name = "personage_type")
public class PersonageType {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @Basic
    @Column
    private String description;

    @OneToMany(mappedBy = "personageType")
    private Collection<Personage> personages;

    @ManyToMany(mappedBy = "personageTypes")
    private Collection<Event> events;
}
