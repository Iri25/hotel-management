package backend.reservationmanagement.backendservice.controller;

import backend.reservationmanagement.backendservice.model.Room;
import backend.reservationmanagement.backendservice.model.dto.RoomDTO;
import backend.reservationmanagement.backendservice.repository.RoomRepositoryInterface;
import backend.reservationmanagement.backendservice.service.RoomServiceInterface;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {
//    private RoomServiceInterface roomService;
//
//    @GetMapping
//    public List<RoomDTO> getAll() {
//        return roomService.getAllRooms();
//    }
//
//    @GetMapping("/{roomId}")
//    public RoomDTO getOne(@PathVariable("roomId") Long roomId) {
//
//        return roomService.getOne(roomId);
//    }

    private final RoomRepositoryInterface roomRepository;

    public RoomController(RoomRepositoryInterface roomRepository) {
        this.roomRepository = roomRepository;
    }

    @GetMapping
    public List<Room> getRooms() {
        return roomRepository.findAll();
    }

    @GetMapping("/{id}")
    public Room getRoom(@PathVariable Long id) {
        return roomRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}