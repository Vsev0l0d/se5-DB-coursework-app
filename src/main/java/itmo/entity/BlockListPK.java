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
public class BlockListPK implements Serializable {
    @Column(name = "blocking")
    private int blockingId;

    @Column(name = "blocked")
    private int blockedId;
}
