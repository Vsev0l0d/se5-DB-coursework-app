package itmo.repository;

import itmo.entity.Personage;
import org.springframework.data.repository.CrudRepository;

public interface PersonageRepository extends CrudRepository<Personage, Integer> {
}
