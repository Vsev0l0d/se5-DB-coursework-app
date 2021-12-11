package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "block_list")
public class BlockList {
    @EmbeddedId
    private BlockListPK id;

    @Basic
    @Column
    private String type;
}
