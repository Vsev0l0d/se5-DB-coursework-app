package itmo.repository;

import itmo.entity.Invitation;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource
public interface InvitationRepository extends PagingAndSortingRepository<Invitation, Integer> {
    Collection<Invitation> findByPersonageId(@Param("personageId") int personageId);
}
