import React from "react";
import BookingInfo from "./BookingInfo";

const BookingList = ({bookingList, onBookingClick, selectedBooking}) => {
    
    const handleClick = () => {
      onBookingClick(selectedBooking)
    }

    return (
        <div>
        <h1>booking list</h1>
        <ul>
        {bookingList.map((booking, index) => {
          return <li onClick={handleClick} key={index}>{booking.name}</li>
        })}
        </ul>
        <BookingInfo selectedBooking={selectedBooking}/>
        </div>
    )
}

export default BookingList;