package backend.reservationmanagement.backendservice.controller;

import backend.reservationmanagement.backendservice.model.Booking;
import backend.reservationmanagement.backendservice.model.dto.BookingDTO;
import backend.reservationmanagement.backendservice.repository.BookingRepositoryInterface;
import backend.reservationmanagement.backendservice.service.BookingServiceInterface;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {
//    private BookingServiceInterface bookingService;
//
//    @GetMapping
//    public List<BookingDTO> getAll() {
//        return bookingService.getAllBookings();
//    }
//
//    @GetMapping("/{bookingId}")
//    public BookingDTO getOne(@PathVariable("bookingId") Long bookingId) {
//
//        return bookingService.getOne(bookingId);
//    }

    private final BookingRepositoryInterface bookingRepository;

    public BookingController(BookingRepositoryInterface bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @GetMapping
    public List<Booking> getClients() {
        return bookingRepository.findAll();
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable Long id) {
        return bookingRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}