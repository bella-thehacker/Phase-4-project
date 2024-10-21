import React, { useEffect, useState } from 'react';

const BookNow = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {

        //...Fetch available rooms on component mount...//

        const fetchRooms = async () => {
            try {
                const response = await fetch('/book_now', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setRooms(data);
            } catch (err) {
                console.error(err);
                setError('Error fetching rooms.');
            }
        };
        fetchRooms();
    }, []);

    const handleBooking = async (e) => {
        e.preventDefault();
        setError('');

        //...Validate form inputs...//

        if (!selectedRoom || !startDate || !endDate || !totalCost) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/book_now', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    room_id: selectedRoom,
                    start_date: startDate,
                    end_date: endDate,
                    total_cost: totalCost
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error making booking.');
            }

            const data = await response.json();
            alert('Booking successful!');
            console.log(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Book Now</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleBooking}>
                <label>
                    Room:
                    <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
                        <option value="">Select a room</option>
                        {rooms.map(room => (
                            <option key={room.id} value={room.id}>
                                {room.room_type} - ${room.price_per_night}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Total Cost:
                    <input type="number" value={totalCost} onChange={(e) => setTotalCost(e.target.value)} />
                </label>
                <br />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookNow;
