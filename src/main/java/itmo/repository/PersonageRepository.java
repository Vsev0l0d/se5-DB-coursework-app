package itmo.repository;

import itmo.entity.Personage;
import itmo.entity.PersonageType;
import itmo.projection.PersonageProjection;
import net.minidev.json.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(excerptProjection = PersonageProjection.class)
public interface PersonageRepository extends CrudRepository<Personage, Integer> {
    @Query(nativeQuery = true, value = "select weapon_count(:id), clothing_count(:id)," +
            " prise_count(:id), share_of_accepted_invitations(:id)")
    JSONObject statistics(@Param("id") int id);

    Collection<Personage> findByPersonageType(@Param("personageType") PersonageType personageType);
}