package itmo.entity;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "event_personage_type")
public class EventPersonageType {
    @EmbeddedId
    private EventPersonageTypePK id;
}
