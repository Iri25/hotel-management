package backend.reservationmanagement.backendservice.utils.mapper;

import backend.reservationmanagement.backendservice.model.Hotel;
import backend.reservationmanagement.backendservice.model.dto.HotelDTO;
import backend.reservationmanagement.backendservice.repository.HotelRepositoryInterface;

public class HotelMapper {
    private HotelRepositoryInterface hotelRepository;

    public HotelDTO convertToDTO(Hotel hotel) {
        HotelDTO hotelDTO = new HotelDTO();
        hotelDTO.setId(hotel.getId());
        hotelDTO.setName(hotel.getName());
        hotelDTO.setLatitude(hotel.getLatitude());
        hotelDTO.setLongitude(hotel.getLongitude());
        //hotelDTO.setRooms(hotel.getRooms());

        return hotelDTO;
    }
}
