package backend.reservationmanagement.backendservice.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {
    private Long id;
    private Integer roomNumber;
    private Integer type;
    private Integer price;
    private Boolean isAvailable;

}
