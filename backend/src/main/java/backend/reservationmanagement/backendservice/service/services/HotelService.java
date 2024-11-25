package backend.reservationmanagement.backendservice.service.services;

import backend.reservationmanagement.backendservice.model.dto.HotelDTO;
import backend.reservationmanagement.backendservice.repository.HotelRepositoryInterface;
import backend.reservationmanagement.backendservice.service.HotelServiceInterface;
import backend.reservationmanagement.backendservice.utils.mapper.HotelMapper;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class HotelService implements HotelServiceInterface {
    private ModelMapper modelMapper;
    private HotelMapper hotelMapper;
    private HotelRepositoryInterface hotelRepository;

    @Override
    public List<HotelDTO> getAllHotels() {
        return hotelRepository.findAll().stream().map(hotel -> modelMapper.map(hotel, HotelDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public HotelDTO getOne(Long hotelId) {

        return hotelMapper.convertToDTO(hotelRepository.findById(hotelId).orElseThrow());
    }
}
