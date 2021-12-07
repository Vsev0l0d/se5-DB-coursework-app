package itmo.repository;

import itmo.entity.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface EventRepository extends CrudRepository<Event, Integer> {
    Collection<Event> findByOwnerId(@Param("ownerId") int ownerId);
}
