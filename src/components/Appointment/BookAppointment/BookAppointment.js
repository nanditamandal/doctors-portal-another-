import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData=[
    {
        id:1,
        subject:'teeth orthodontics',
        visitingHours:'8:00Am -9:00 Am',
        totalSpace:10
   },
   {
    id:2,
    subject:'teeth orthodontics',
    visitingHours:'8:00Am -9:00 Am',
    totalSpace:10
},
{
    id:3,
    subject:'teeth orthodontics',
    visitingHours:'8:00Am -9:00 Am',
    totalSpace:10
},
{
    id:4,
    subject:'teeth orthodontics',
    visitingHours:'8:00Am -9:00 Am',
    totalSpace:10
},
{
    id:5,
    subject:'teeth orthodontics',
    visitingHours:'8:00Am -9:00 Am',
    totalSpace:10
},
{
    id:6,
    subject:'teeth orthodontics',
    visitingHours:'8:00Am -9:00 Am',
    totalSpace:10
},
   
]
const BookAppointment = ({date}) => {
    return (
        <div>
            <h2 style={{color: "#1cc7c1"}} className="text-center">Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key ={booking.id} date={date} booking={booking}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookAppointment;