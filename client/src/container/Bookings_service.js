const bookingsUrl = 'http://localhost:5000/api/bookings/';

export const getBookings = () => {
  return fetch(bookingsUrl).then(res => res.json())
}

export const postBookings = (payload) => {
  return fetch(bookingsUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {"Content-Type": "application/json"}
  }).then((res) => res.json())
};

// export const updateBookings = ()

export const deleteBookings = (id) => {
    return fetch(bookingsUrl + id, {
        method: 'DELETE'
    })
};

