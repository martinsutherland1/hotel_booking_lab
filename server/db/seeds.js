use bookings;
db.dropDatabase();

db.booking.insertMany([

    {
        name: "Frankstein's Monster",
        email: "franky@gmail.com",
        checkedIn: "False"
    },
    {
        name: "Wolfman",
        email: "ouuuuuuuuuuu@gmail.com",
        checkedIn: "False"
    },
    {
        name: "Dracula",
        email: "stoker@gmail.com",
        checkedIn: "False"
    },
    {
        name: "Freddie Krueger",
        email: "theyaintclaws@gmail.com",
        checkedIn: "False"
    }
    
]);
