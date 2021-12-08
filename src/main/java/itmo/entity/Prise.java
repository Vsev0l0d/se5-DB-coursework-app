package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Prise {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column
    private String type;

    @Column(name = "owner_id")
    private int ownerId;

    @Basic
    @Column(name = "event_id")
    private int eventId;
}