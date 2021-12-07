package itmo.repository;

import itmo.entity.Invitation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface InvitationRepository extends CrudRepository<Invitation, Integer> {
    Collection<Invitation> findByPersonageId(@Param("personageId") int personageId);
}
