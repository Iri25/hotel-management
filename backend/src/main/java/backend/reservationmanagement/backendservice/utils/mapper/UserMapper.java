package backend.reservationmanagement.backendservice.utils.mapper;

import backend.reservationmanagement.backendservice.model.User;
import backend.reservationmanagement.backendservice.model.dto.UserDTO;

public class UserMapper {
    public static User userDTOtoUser(UserDTO userDTO) {
        User updatedUser = new User();
        updatedUser.setId(userDTO.getId());
        updatedUser.setFirstName(userDTO.getFirstName());
        updatedUser.setLastName(userDTO.getLastName());
        updatedUser.setEmail(userDTO.getEmail());
        updatedUser.setPassword(userDTO.getPassword());

        return updatedUser;
    }
}
