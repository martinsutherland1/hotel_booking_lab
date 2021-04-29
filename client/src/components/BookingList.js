import React from "react";
import BookingInfo from "./BookingInfo";
import { deleteBookings } from "../container/Bookings_service";

const BookingList = ({bookingList, onBookingClick, selectedBooking, removeBooking}) => {
    
    
    const handleClick = () => {
      onBookingClick(selectedBooking)
    }
    const handleDelete = (e) => {
      console.log(e.target.value)
      deleteBookings(e.target.value).then(() => {
        removeBooking(e.target.value)
      })
    }
    // deleteSighting(sighting._id).then(()=>{
    //   removeSighting(sighting._id);

    return (
        <div>
        <h1>booking list</h1>
        <ul>
        {bookingList.map((booking, index) => {
          return <li onClick={handleClick} key={index}>{booking.name} <button value={booking._id} onClick={handleDelete}> Delete</button></li>
        })}
        </ul>
        <BookingInfo selectedBooking={selectedBooking}/>
        
        </div>
    )
}

export default BookingList;