package itmo.projection;

import itmo.entity.*;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Timestamp;
import java.util.Collection;

@Projection(name = "EventProjection", types = { Event.class })
public interface EventProjection {
    String getName();
    Timestamp getDateStart();
    Timestamp getDateEnd();
    String geDescription();
    boolean getVisibility();
    Location getLocation();
    Personage getOwner();
    Collection<ThingControl> getThingControls();
    Collection<PersonageType> getPersonageTypes();
}
