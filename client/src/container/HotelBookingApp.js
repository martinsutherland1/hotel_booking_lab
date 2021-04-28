import React, {useState, useEffect} from "react";
import {getBookings}  from "./Bookings_service";
import BookingForm from "../components/BookingForm"
import BookingList from "../components/BookingList"

const HotelBookingApp = () => {

    const [bookingList, setBookingList] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState("");

    useEffect(() => {
      getBookings().then((res) => {
          setBookingList(res)})
    }, [])

    const addBooking = (booking) => {
      setBookingList([...bookingList, booking]); // might not work, if so go back to notes
    }

    const onBookingClick = (selectedBooking) => {
      setSelectedBooking(selectedBooking)
    }



    return (
        <div>
        <h1>Last Hope Hotel</h1>
        <BookingList bookingList={bookingList} selectedBooking={selectedBooking} onBookingClick={onBookingClick}/>
        <BookingForm addBooking={addBooking}/>
        </div>
    )
}

export default HotelBookingApp;

