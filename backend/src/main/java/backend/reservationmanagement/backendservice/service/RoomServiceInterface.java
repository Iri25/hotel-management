package backend.reservationmanagement.backendservice.service;

import backend.reservationmanagement.backendservice.model.dto.RoomDTO;

import java.util.List;

public interface RoomServiceInterface {
    List<RoomDTO> getAllRooms();
    RoomDTO getOne(Long roomId);
}
