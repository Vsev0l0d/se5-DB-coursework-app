package itmo.repository;

import itmo.entity.Event;
import itmo.projection.EventProjection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(excerptProjection = EventProjection.class)
public interface EventRepository extends CrudRepository<Event, Integer> {
    Collection<Event> findByOwnerId(@Param("ownerId") int ownerId);
}
