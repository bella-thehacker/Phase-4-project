import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookNow = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(' http://127.0.0.1:8040/rooms', {
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
            const response = await fetch(' http://127.0.0.1:8040/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(values)
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
        } finally {
            setSubmitting(false);
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
                    total_cost: 0
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
                    if (!values.total_cost || values.total_cost <= 0) {
                        errors.total_cost = 'Must be greater than 0';
                    }
                    return errors;
                }}
                onSubmit={handleBooking}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>
                            Room:
                            <Field as="select" name="room_id">
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
                            <Field type="date" name="start_date" />
                            <ErrorMessage name="start_date" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <label>
                            End Date:
                            <Field type="date" name="end_date" />
                            <ErrorMessage name="end_date" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <label>
                            Total Cost:
                            <Field type="number" name="total_cost" />
                            <ErrorMessage name="total_cost" component="div" style={{ color: 'red' }} />
                        </label>
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Book Now
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookNow;
