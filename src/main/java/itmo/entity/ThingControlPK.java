package itmo.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public class ThingControlPK implements Serializable {
    @Id
    @Column
    private String type;

    @Id
    @Column(name = "event_id")
    private int eventId;
}
