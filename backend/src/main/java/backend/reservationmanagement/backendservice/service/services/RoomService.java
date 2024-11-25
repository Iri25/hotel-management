package backend.reservationmanagement.backendservice.service.services;

import backend.reservationmanagement.backendservice.model.dto.RoomDTO;
import backend.reservationmanagement.backendservice.repository.RoomRepositoryInterface;
import backend.reservationmanagement.backendservice.service.RoomServiceInterface;
import backend.reservationmanagement.backendservice.utils.mapper.RoomMapper;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class RoomService implements RoomServiceInterface {
    private ModelMapper modelMapper;
    private RoomMapper roomMapper;
    private RoomRepositoryInterface roomRepository;

    @Override
    public List<RoomDTO> getAllRooms() {
        return roomRepository.findAll().stream().map(room -> modelMapper.map(room, RoomDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public RoomDTO getOne(Long roomId) {
        return roomMapper.convertToDTO(roomRepository.findById(roomId).orElseThrow());
    }
}
