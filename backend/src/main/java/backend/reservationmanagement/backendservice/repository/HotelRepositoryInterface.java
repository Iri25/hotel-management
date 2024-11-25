package backend.reservationmanagement.backendservice.repository;

import backend.reservationmanagement.backendservice.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepositoryInterface extends JpaRepository<Hotel, Long> {
}
