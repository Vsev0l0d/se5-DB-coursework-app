package itmo.repository;

import itmo.entity.FairyPersonage;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface FairyPersonageRepository extends PagingAndSortingRepository<FairyPersonage, Integer> {
}
