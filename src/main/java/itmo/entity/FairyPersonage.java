package itmo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "fairy_personage")
public class FairyPersonage {
    @Id
    @Column
    private int id;

    @Basic
    @Column
    private String skill;
}
