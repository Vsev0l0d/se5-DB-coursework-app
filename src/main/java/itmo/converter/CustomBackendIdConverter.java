package itmo.converter;

import itmo.entity.BlockList;
import itmo.entity.BlockListPK;
import itmo.entity.ThingControl;
import itmo.entity.ThingControlPK;
import org.springframework.data.rest.webmvc.spi.BackendIdConverter;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
class CustomBackendIdConverter implements BackendIdConverter {
    @Override
    public Serializable fromRequestId(String id, Class<?> entityType) {
        String[] parts = id.split("_");
        switch (entityType.getSimpleName()) {
            case "BlockList":
                return new BlockListPK(Integer.parseInt(parts[0]), Integer.parseInt(parts[1]));
            case "ThingControl":
                return new ThingControlPK(Integer.parseInt(parts[0]), parts[1]);
            default:
                return null;
        }
    }

    @Override
    public String toRequestId(Serializable source, Class<?> entityType) {
        switch (entityType.getSimpleName()) {
            case "BlockList":
                BlockListPK blockListPK = (BlockListPK) source;
                return String.format("%s_%s", blockListPK.getBlockingId(), blockListPK.getBlockedId());
            case "ThingControl":
                ThingControlPK thingControlPK = (ThingControlPK) source;
                return String.format("%s_%s", thingControlPK.getEventId(), thingControlPK.getType());
            default:
                return null;
        }
    }

    @Override
    public boolean supports(Class<?> type) {
        return BlockList.class.equals(type) || ThingControl.class.equals(type);
    }
}
