package itmo.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public class BlockListPK implements Serializable {
    @Id
    @Column
    private int blockingId;

    @Id
    @Column
    private int blockedId;
}
