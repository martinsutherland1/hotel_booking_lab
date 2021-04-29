import React, { useState } from "react";
import {postBookings} from "../container/Bookings_service"

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({});
  
    // onchange to update form
    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData)
      
    }


    // onsubmmit to pass data to db

    const onSubmit = (event) => {
        
        // event.preventDefault();
        postBookings(formData).then((data) => {
            addBooking(data);
            

          
        });
        event.target.reset();
      
    }

    return (
        <div>
        <h1>booking form</h1>
        <form onSubmit={onSubmit}>
            <label  name="name">Name</label>
            <input onChange={onChange} type="text" name="name" id="name"/>
            <label name="email">Email</label>
            <input onChange={onChange} type="text" name="email" id="email"/>
            <select name="checkedIn" id="checkedIn" onChange={onChange}>
                <option value="True">Yes</option>
                <option value="False">No</option>
            </select>
            <input type="submit"/>
        </form>
        </div>
    )
}

export default BookingForm;