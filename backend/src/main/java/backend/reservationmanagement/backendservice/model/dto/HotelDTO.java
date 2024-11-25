package backend.reservationmanagement.backendservice.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {

    private Long id;
    private String name;
    private Double latitude;
    private Double longitude;
    private List<RoomDTO> rooms;
}
