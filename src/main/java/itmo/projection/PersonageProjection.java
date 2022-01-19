package itmo.projection;

import itmo.entity.Personage;
import itmo.entity.PersonageType;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "PersonageProjection", types = { Personage.class })
public interface PersonageProjection {
    String getName();
    PersonageType getPersonageType();
    int getId();
}
