import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from '../components/ui/Button';
import Card from 'src/components/ui/Card';
import HotelCard from 'src/components/ui/HotelCard';

type Hotel = {
    id: number;
    name: string;
    latitudine: number;
    longitudine: number; 
    rooms: number[];
};

export default function Home() {
    const navigate = useNavigate(); 
    const [hotels, setHotels] = useState<Hotel[]>([]); //useState([]); 
    const [error, setError] = useState(null); 
    const [radius, setRadius] = useState<number>(0); 
    const [loading, setLoading] = useState<boolean>(false);

    const fetchHotels = async (latitude: number, longitude: number, radius: number) => {
            setLoading(true);
            try {
                const response = await axios.get<Hotel[]>(`http://localhost:8080/api/hotels/search`, {
                    params: {
                        latitude,
                        longitude,
                        radius
                    }
                });
                setHotels(response.data);
                setLoading(false);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    // Axios error
                    setError(err.response?.data?.message || err.message);
                }
                setLoading(false);
            }
        };

        const handleSearch = () => {
            if (!navigator.geolocation) {
                return;
            }
    
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchHotels(latitude, longitude, radius);
                },
            );
        };

    return (
        <div className='flex flex-col gap-y-5 w-1/2'>
            <Card className='justify-between'>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="radius">Radius (km):</label>
                    <input
                        type="number"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(Number(e.target.value))}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                <Button onClick={handleSearch}>Find hotels</Button>
            </Card>
            <Card>
                {error ? (
                    <p className="text-red-500">Error: {error}</p>
                ) : (
                    <ul className='flex flex-col gap-y-4 w-full'>
                        {hotels.map((hotel) => (
                            <li key={hotel.id}>
                                <HotelCard hotel={hotel} />
                            </li>
                        ))}
                    </ul>
                )}
            </Card>
        </div>
    )

}

