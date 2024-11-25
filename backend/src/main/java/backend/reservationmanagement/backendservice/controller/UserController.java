package backend.reservationmanagement.backendservice.controller;

import backend.reservationmanagement.backendservice.model.User;
import backend.reservationmanagement.backendservice.model.dto.UserDTO;
import backend.reservationmanagement.backendservice.repository.UserRepositoryInterface;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepositoryInterface userRepository;

    public UserController(UserRepositoryInterface userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) throws URISyntaxException {
        return userRepository.save(user);
    }
}