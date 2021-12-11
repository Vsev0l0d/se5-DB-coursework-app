package itmo.repository;

import itmo.entity.ThingControl;
import itmo.entity.ThingControlPK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface ThingControlRepository extends CrudRepository<ThingControl, ThingControlPK> {
    Collection<ThingControl> findByIdEventId(@Param("eventId") int eventId);
}
