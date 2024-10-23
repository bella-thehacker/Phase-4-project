import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BookingSuccessful from './BookingSuccessful'; // Import the new pop-up component

const BookNow = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState('');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for the success pop-up

    // Fetch rooms when the component mounts
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('https://phase-4-project-ybtk.onrender.com//rooms', {
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

    const handleBooking = async (values, { setSubmitting }) => {
        setError('');
        try {
            const userId = localStorage.getItem('user_id'); // Get user ID from local storage
            const bookingData = { 
                user_id: userId, // Include user_id in the booking data
                room_id: values.room_id,
                start_date: values.start_date,
                end_date: values.end_date,
                total_cost: totalCost 
            };

            console.log('Booking data:', bookingData); // Log the payload

            const response = await fetch('https://phase-4-project-ybtk.onrender.com//bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(bookingData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Response from server:', errorData);
                throw new Error(errorData.error || 'Error making booking.');
            }

            const data = await response.json();
            console.log(data);
            setShowSuccessPopup(true); // Show the success pop-up on successful booking
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleRoomChange = (roomId) => {
        const room = rooms.find(room => room.id === parseInt(roomId));
        setSelectedRoom(room);
        if (room) {
            setTotalCost(0); // Reset total cost when room changes
        } else {
            setTotalCost(0);
        }
    };

    const calculateTotalCost = (pricePerNight, startDate, endDate) => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            const cost = nights > 0 ? pricePerNight * nights : 0;
            setTotalCost(cost);
        } else {
            setTotalCost(0);
        }
    };

    return (
        <div>
            <h2>Book Now</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Formik
                initialValues={{
                    room_id: '',
                    start_date: '',
                    end_date: '',
                }}
                validate={values => {
                    const errors = {};
                    if (!values.room_id) {
                        errors.room_id = 'Required';
                    }
                    if (!values.start_date) {
                        errors.start_date = 'Required';
                    }
                    if (!values.end_date) {
                        errors.end_date = 'Required';
                    }
                    if (totalCost <= 0) {
                        errors.total_cost = 'Must be greater than 0';
                    }
                    return errors;
                }}
                onSubmit={handleBooking}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <label>
                            Room:
                            <Field as="select" name="room_id" onChange={e => {
                                handleRoomChange(e.target.value);
                                setFieldValue("room_id", e.target.value); // Update Formik value
                            }}>
                                <option value="">Select a room</option>
                                {rooms.map(room => (
                                    <option key={room.id} value={room.id}>
                                        {room.room_type} - ${room.price_per_night}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="room_id" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <label>
                            Start Date:
                            <Field type="date" name="start_date" onChange={e => {
                                const newStartDate = e.target.value;
                                setFieldValue("start_date", newStartDate);
                                if (selectedRoom) {
                                    calculateTotalCost(selectedRoom.price_per_night, newStartDate, document.querySelector('input[name="end_date"]').value);
                                }
                            }} />
                            <ErrorMessage name="start_date" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <label>
                            End Date:
                            <Field type="date" name="end_date" onChange={e => {
                                const newEndDate = e.target.value;
                                setFieldValue("end_date", newEndDate);
                                if (selectedRoom) {
                                    calculateTotalCost(selectedRoom.price_per_night, document.querySelector('input[name="start_date"]').value, newEndDate);
                                }
                            }} />
                            <ErrorMessage name="end_date" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <label>
                            Total Cost: ${totalCost.toFixed(2)} {/* Display total cost */}
                        </label>
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Book Now
                        </button>
                    </Form>
                )}
            </Formik>

            {/* Render the booking success popup if the booking was successful */}
            {showSuccessPopup && <BookingSuccessful onClose={() => setShowSuccessPopup(false)} />}
        </div>
    );
};

export default BookNow;
