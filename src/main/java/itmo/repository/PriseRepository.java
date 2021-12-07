package itmo.repository;

import itmo.entity.Prise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(collectionResourceRel = "prizes",path = "prizes")
public interface PriseRepository extends CrudRepository<Prise, Integer> {
    Collection<Prise> findByOwnerId(@Param("ownerId") int ownerId);

    Collection<Prise> findByEventId(@Param("eventId") int eventId);
}
