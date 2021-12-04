package itmo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Objects;

@Data
@Entity
@Table(name = "thing_control")
@IdClass(ThingControlPK.class)
public class ThingControl {
    @Id
    @Column
    private String type;

    @Id
    @Column(name = "event_id")
    private int eventId;
}
