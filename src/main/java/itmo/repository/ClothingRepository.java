package itmo.repository;

import itmo.entity.Clothing;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(collectionResourceRel = "clothing", path = "clothing")
public interface ClothingRepository extends CrudRepository<Clothing, Integer> {
    Collection<Clothing> findByOwnerId(@Param("ownerId") int ownerId);
}
