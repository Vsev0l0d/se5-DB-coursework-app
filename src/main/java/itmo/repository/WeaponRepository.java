package itmo.repository;

import itmo.entity.Weapon;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface WeaponRepository extends CrudRepository<Weapon, Integer> {
    Collection<Weapon> findByOwnerId(@Param("ownerId") int ownerId);
}
