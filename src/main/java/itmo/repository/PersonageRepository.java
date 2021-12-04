package itmo.repository;

import itmo.entity.Personage;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "personage", path = "personage")
public interface PersonageRepository extends PagingAndSortingRepository<Personage, Integer> {
}
