import React from "react";
import {postBookings} from "../container/Bookings_service"

const BookingForm = ({addBooking}) => {
  
    // onchange to update form

    // onsubmmit to pass data to db

    return (
        <div>
        <h1>booking form</h1>
        <form>
            <label name="name">Name</label>
            <input type="text" name="name" id="name"/>
            <label name="email">Email</label>
            <input type="text" name="email" id="email"/>
            <select name="checkedIn" id="checkedIn">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <input type="submit" onSubmit={submitForm}/>
        </form>
        </div>
    )
}

export default BookingForm;