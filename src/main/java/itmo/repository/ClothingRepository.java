package itmo.repository;

import itmo.entity.Clothing;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(path = "clothing")
public interface ClothingRepository extends PagingAndSortingRepository<Clothing, Integer> {
    Collection<Clothing> findByOwnerId(@Param("ownerId") int ownerId);
}
