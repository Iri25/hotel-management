# hotel-management

Web application for hotel reservation management from two components: frontend and backend.

`Frontend` is designed in the object-oriented programming language, JavaScript, using the React library.

`Backend` is developed in the object-oriented programming language, Java, using maven.

## Requirements
Web application for hotel reservation management with the following specifications:
- the user specifies a radius in kilometers to find all the nearby hotels
- the application lists and displays all hotels found
- the user can select a specific hotel and see all available rooms alongside their prices
- after this, the user can book one, or more of the available rooms
- the application allows the user to cancel their reservation or change the booked room at least two hours before the check-in
- user can leave a feedback (services, cleanliness, etc)

## Specifications:
- the application has stored all hotels with their coordinates, rooms, and the price for each room in a database
- a hotel can have: single room , double room, suite room or matrimonial room which vary by price
- for a user to receive all the nearby hotels the following position calculation must be implemented:

### Position calculation:
1. calculate the current user position (latitude , longitude) 
2. convert the user position (lat, long) in meters (https://en.wikipedia.org/wiki/Geographic_coordinate_system)
3. convert all the hotels position (lat, long) that are stored in the application, in meters (https://en.wikipedia.org/wiki/Geographic_coordinate_system)
4. calculate the distance between the user's position and every hotel's position (the distance between 2 points)
5. check if the position is within the specified radius
6. if yes, then the hotel is in specified radius
