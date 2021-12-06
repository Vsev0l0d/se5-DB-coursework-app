package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "block_list")
@IdClass(BlockListPK.class)
public class BlockList {
    @Id
    @Column(name = "blocking")
    private int blockingId;

    @Id
    @Column(name = "blocked")
    private int blockedId;

    @Basic
    @Column
    private String type;
}
