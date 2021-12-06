package itmo.repository;

import itmo.entity.Weapon;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource
public interface WeaponRepository extends PagingAndSortingRepository<Weapon, Integer> {
    Collection<Weapon> findByOwnerId(@Param("ownerId") int ownerId);
}
