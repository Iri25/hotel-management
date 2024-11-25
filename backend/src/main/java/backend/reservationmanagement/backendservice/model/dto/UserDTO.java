package backend.reservationmanagement.backendservice.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;
    @NotEmpty(message = "First name field cannot be null!")
    private String firstName;
    @NotEmpty(message = "Last name field cannot be null!")
    private String lastName;
    @NotEmpty(message = "Email field cannot be null!")
    private String email;
    @NotEmpty(message = "Password field cannot be null!")
    private String password;
}