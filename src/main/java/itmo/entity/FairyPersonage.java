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

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id", nullable = false)
    private Personage personage;
}
