package itmo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class EventPersonageTypePK implements Serializable {
    @Column(name = "event_id")
    private int eventId;

    @Column(name = "personage_type_id")
    private int personageTypeId;
}
