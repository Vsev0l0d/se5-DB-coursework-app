package itmo.repository;

import itmo.entity.Event;
import itmo.entity.Weapon;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource
public interface EventRepository extends PagingAndSortingRepository<Event, Integer> {
    Collection<Event> findByOwnerId(@Param("ownerId") int ownerId);
}
