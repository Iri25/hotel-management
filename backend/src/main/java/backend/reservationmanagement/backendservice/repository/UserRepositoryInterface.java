package backend.reservationmanagement.backendservice.repository;

import backend.reservationmanagement.backendservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoryInterface extends JpaRepository<User, Long> {
}
