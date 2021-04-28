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

    const removeBooking = (id) => {
      const temp = bookingList.map(booking => booking);
      const indexToDel = temp.map(booking => booking._id).indexOf(id);
      console.log(indexToDel);
      temp.splice(indexToDel, 1);
     setBookingList(temp);
    }

    // const removeSighting = (id) => {
    //   const temp = birdSightings.map(s =>s);
    //   const indexToDel = temp.map(s => s._id).indexOf(id);
    //   console.log(indexToDel);
  
    //   temp.splice(indexToDel, 1);
    //   setBirdSightings(temp);
    // }



    return (
        <div>
        <h1>Last Hope Hotel</h1>
        <BookingList bookingList={bookingList} selectedBooking={selectedBooking} onBookingClick={onBookingClick} removeBooking={removeBooking}/>
        <BookingForm addBooking={addBooking}/>
        </div>
    )
}

export default HotelBookingApp;

