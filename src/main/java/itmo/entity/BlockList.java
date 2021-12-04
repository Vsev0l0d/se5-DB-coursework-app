package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
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
