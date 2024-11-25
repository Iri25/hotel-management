package backend.reservationmanagement.backendservice.controller;

import backend.reservationmanagement.backendservice.model.Hotel;
import backend.reservationmanagement.backendservice.model.Room;
import backend.reservationmanagement.backendservice.model.dto.HotelDTO;
import backend.reservationmanagement.backendservice.repository.HotelRepositoryInterface;
import backend.reservationmanagement.backendservice.repository.RoomRepositoryInterface;
import backend.reservationmanagement.backendservice.service.HotelServiceInterface;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {
//    private HotelServiceInterface hotelService;
//
//    @GetMapping
//    public List<HotelDTO> getAll() {
//        return hotelService.getAllHotels();
//    }
//
//    @GetMapping("/{hotelId}")
//    public HotelDTO getOne(@PathVariable("hotelId") Long hotelId) {
//
//        return hotelService.getOne(hotelId);
//    }

    private final HotelRepositoryInterface hotelRepository;

    public HotelController(HotelRepositoryInterface hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @GetMapping
    public List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("/{id}")
    public Hotel getHotel(@PathVariable Long id) {
        return hotelRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}
