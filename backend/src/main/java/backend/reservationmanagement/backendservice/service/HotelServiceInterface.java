package backend.reservationmanagement.backendservice.service;

import backend.reservationmanagement.backendservice.model.dto.HotelDTO;

import java.util.List;

public interface HotelServiceInterface {
    List<HotelDTO> getAllHotels();
    HotelDTO getOne(Long hotelId);
}
