package backend.reservationmanagement.backendservice.utils.mapper;

import backend.reservationmanagement.backendservice.model.Room;
import backend.reservationmanagement.backendservice.model.dto.RoomDTO;
import backend.reservationmanagement.backendservice.repository.RoomRepositoryInterface;

public class RoomMapper {
    private RoomRepositoryInterface roomRepository;

    public RoomDTO convertToDTO(Room room) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(room.getId());
        roomDTO.setRoomNumber(room.getRoomNumber());
        roomDTO.setType(room.getType());
        roomDTO.setPrice(room.getPrice());
        roomDTO.setIsAvailable(room.getIsAvailable());

        return roomDTO;
    }
}
