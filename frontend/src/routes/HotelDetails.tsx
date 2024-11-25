import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'src/components/ui/Card';
import Typography from 'src/components/ui/Typography';
import DatePicker from 'react-datepicker';

type Room = {
    id: number;
    type: string;
    price: number;
    isAvailable: boolean;
};

export default function HotelDetails() {
    const { hotelId } = useParams(); // Get the hotel ID from the URL
    const [rooms, setRooms] = useState<Room[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    useEffect(() => {
        const fetchRooms = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Room[]>(`http://localhost:8080/api/rooms/available/${hotelId}`);
                setRooms(response.data);
                setLoading(false);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message || err.message);
                } else if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        };

        fetchRooms();
    }, [hotelId]);

    const getRoomTypeDescription = (type: number) => {
        switch (type) {
            case 1:
                return 'Single Room';
            case 2:
                return 'Double Room';
            case 3:
                return 'Suite Room';
            case 4:
                return 'Matrimonial Room';
            default:
                return 'Unknown Room Type';
        }
    };
    
    const handleBookRoom = async (roomId: number) => {
        if (!checkInDate || !checkOutDate) {
            setError('Please select check-in and check-out dates.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/reservations/book`, null, {
                params: {
                    roomId,
                    userId: 1, // Assuming userId is 1 for now (the login page is not yet implemented)
                    checkIn: checkInDate.toISOString(),
                    checkOut: checkOutDate.toISOString(),
                }
            });
            alert('Room booked successfully!');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    const handleCancelReservation = async (reservationId: number) => {
        try {
            await axios.post(`http://localhost:8080/api/reservations/cancel/${reservationId}`);
            alert('Reservation cancelled successfully!');
            const reservationsResponse = await axios.get(`http://localhost:8080/api/reservations/hotel/${hotelId}`);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };


    return (
        <div className='flex flex-col gap-y-5 w-1/2'>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                <Card>
                    {/* <div className='flex flex-col gap-y-3'> */}
                        <Typography variant='title-medium'>Available Rooms</Typography>
                        <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col'>
                                <label>Check-In Date:</label>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date: Date) => setCheckInDate(date)}
                                    className="grid grid-rows-4 grid-flow-col gap-4  p-2 border border-gray-300 rounded"
                                    dateFormat="yyyy/MM/dd"
                               />
                            </div>
                            <div className='flex flex-col'>
                                <label>Check-Out Date:</label>
                                <DatePicker
                                    selected={checkOutDate}
                                    onChange={(date: Date) => setCheckOutDate(date)}
                                    className="p-2 border border-gray-300 rounded"
                                    dateFormat="yyyy/MM/dd"
                                />
                            </div>
                        </div>
                    <ul className='flex flex-col gap-y-4 w-full'>
                        {rooms.map((room) => (
                            <li key={room.id} className='cursor-pointer' onClick={() => handleBookRoom(room.id)}>
                                <Card className='p-4'>
                                    <Typography variant='title'>Type: {getRoomTypeDescription(Number(room.type))}</Typography>
                                    <Typography variant='title'>, Price: ${room.price}</Typography>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>
    );
}
