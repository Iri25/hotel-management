package backend.reservationmanagement.backendservice.service.services;

import backend.reservationmanagement.backendservice.model.dto.UserDTO;
import backend.reservationmanagement.backendservice.repository.UserRepositoryInterface;
import backend.reservationmanagement.backendservice.service.UserServiceInterface;
import backend.reservationmanagement.backendservice.utils.mapper.UserMapper;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class UserService implements UserServiceInterface {
    private ModelMapper modelMapper;
    private UserRepositoryInterface userRepository;

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void save(UserDTO user) {
        userRepository.save(UserMapper.userDTOtoUser(user));
    }
}
