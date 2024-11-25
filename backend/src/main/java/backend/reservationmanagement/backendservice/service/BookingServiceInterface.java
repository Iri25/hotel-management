package backend.reservationmanagement.backendservice.service;

import backend.reservationmanagement.backendservice.model.dto.BookingDTO;

import java.util.List;

public interface BookingServiceInterface {
    List<BookingDTO> getAllBookings();
    BookingDTO getOne(Long bookingDTO);
}
