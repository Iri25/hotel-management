import React, { MouseEventHandler, ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import Typography from './Typography';
import clsx from "clsx"
import Card from './Card';

type Hotel = {
    id: number;
    name: string;
    latitudine: number;
    longitudine: number; 
    rooms: number[];
};

type CardProps = {
    className?: string;
    hotel: Hotel;
}

export default function HotelCard({ className , hotel}: CardProps) {
    const navigate = useNavigate(); 

    const imageUrls = [
        `${process.env.PUBLIC_URL}/images/HotelRamada.jpg`,
        `${process.env.PUBLIC_URL}/images/GrandHotelItalia.jpg`,
        `${process.env.PUBLIC_URL}/images/HamptonbyHilton.jpg`,
    ];

    return (
        <button onClick={() => {navigate(`/hotel/${hotel.id}`)}} className='w-full'>
            <Card className={clsx('rounded-lg w-full gap-x-5', className)}>
            <div className='flex flex-row gap-x-5'>
                <img key={hotel.id-1} src={imageUrls[hotel.id-1]} alt={`Image of hotel ${hotel.name}`} className='h-40 w-40 object-cover rounded-lg' />
        
                </div>
                <div className='flex flex-col gap-y-3'>
                    <Typography variant='title-medium'>{hotel.name}</Typography>
                    <Typography variant='title-medium'>Rooms {hotel.rooms.length}</Typography>
                </div>
            </Card>
        </button >
    );
};
