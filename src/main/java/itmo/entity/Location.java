package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class Location {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String name;

    @Basic
    @Column
    private String description;

    @Basic
    @Column
    private int x;

    @Basic
    @Column
    private int y;

    @OneToMany(mappedBy = "location")
    private Collection<Event> events;
}
