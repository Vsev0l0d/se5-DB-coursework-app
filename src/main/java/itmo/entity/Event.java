package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;

@Data
@Entity
public class Event {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @Basic
    @Column
    private Timestamp dateStart;

    @Basic
    @Column
    private Timestamp dateEnd;

    @Basic
    @Column
    private String description;

    @Basic
    @Column
    private boolean visibility;

    @ManyToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id", nullable = false)
    private Location location;

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private Personage owner;

    @OneToMany
    @JoinColumn(name = "event_id")
    private Collection<ThingControl> thingControls;

    @ManyToMany
    @JoinTable(name = "event_personage_type",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "personage_type_id"))
    private Collection<PersonageType> personageTypes;
}
