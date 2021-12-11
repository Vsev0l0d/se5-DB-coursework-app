package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "thing_control")
public class ThingControl {
    @EmbeddedId
    private ThingControlPK id;
}
