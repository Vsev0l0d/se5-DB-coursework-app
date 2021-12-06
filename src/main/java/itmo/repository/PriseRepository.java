package itmo.repository;

import itmo.entity.Prise;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(path = "prizes")
public interface PriseRepository extends PagingAndSortingRepository<Prise, Integer> {
    Collection<Prise> findByOwnerId(@Param("ownerId") int ownerId);

    Collection<Prise> findByEventId(@Param("eventId") int eventId);
}
