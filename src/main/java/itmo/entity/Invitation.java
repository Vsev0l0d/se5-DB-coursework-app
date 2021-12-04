package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Invitation {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private Boolean confirmation;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id", nullable = false)
    private Event event;

    @ManyToOne
    @JoinColumn(name = "personage_id", referencedColumnName = "id", nullable = false)
    private Personage personage;
}
