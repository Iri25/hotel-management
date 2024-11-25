package backend.reservationmanagement.backendservice.repository;

import backend.reservationmanagement.backendservice.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepositoryInterface extends JpaRepository<Room, Long> {
}
