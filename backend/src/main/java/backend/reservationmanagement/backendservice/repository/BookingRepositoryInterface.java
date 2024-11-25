package backend.reservationmanagement.backendservice.repository;

import backend.reservationmanagement.backendservice.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepositoryInterface extends JpaRepository<Booking, Long> {
}
