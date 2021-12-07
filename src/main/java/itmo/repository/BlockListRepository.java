package itmo.repository;

import itmo.entity.BlockList;
import itmo.entity.BlockListPK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource(collectionResourceRel = "blockList", path = "blockList")
public interface BlockListRepository extends CrudRepository<BlockList, BlockListPK> {
    Collection<BlockList> findByBlockingId(@Param("blockingId") int blockingId);
}
