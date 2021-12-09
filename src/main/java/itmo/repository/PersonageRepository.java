package itmo.repository;

import itmo.entity.Personage;
import net.minidev.json.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PersonageRepository extends CrudRepository<Personage, Integer> {
    @Query(nativeQuery = true, value = "select weapon_count(:id), clothing_count(:id)," +
            " prise_count(:id), share_of_accepted_invitations(:id)")
    JSONObject statistics(@Param("id") int id);
}