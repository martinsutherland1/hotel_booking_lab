import React from "react";

const BookingInfo = ({selectedBooking}) => {
  

    return(
        <div>
        <h1>booking info</h1>
        <p>{selectedBooking.name}</p>
        <p>{selectedBooking.email}</p>
        <p>{selectedBooking.checkedIn}</p>
        </div>
    )
}

export default BookingInfo;