package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Invitation {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column
    private Boolean confirmation;

    @Basic
    @Column(name = "personage_id")
    private int personageId;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id", nullable = false)
    private Event event;
}
