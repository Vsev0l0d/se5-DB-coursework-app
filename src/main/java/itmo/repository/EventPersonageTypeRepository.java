package itmo.repository;

import itmo.entity.EventPersonageType;
import itmo.entity.EventPersonageTypePK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface EventPersonageTypeRepository extends CrudRepository<EventPersonageType, EventPersonageTypePK> {
    Collection<EventPersonageType> findByIdEventId(@Param("eventId") int eventId);
}
