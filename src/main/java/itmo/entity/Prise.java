package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Objects;

@Data
@Entity
public class Prise {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String type;

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private Personage personage;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id", nullable = false)
    private Event event;
}
