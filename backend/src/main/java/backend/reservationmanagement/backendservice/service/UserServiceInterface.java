package backend.reservationmanagement.backendservice.service;

import backend.reservationmanagement.backendservice.model.dto.UserDTO;

import java.util.List;

public interface UserServiceInterface {
    List<UserDTO> getAllUsers();
    void save(UserDTO user);
}
