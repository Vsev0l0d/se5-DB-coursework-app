package itmo.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "block_list")
@IdClass(BlockListPK.class)
public class BlockList {
    @Id
    @Column
    private int blocking;

    @Id
    @Column
    private int blocked;

    @Basic
    @Column
    private String type;
}
