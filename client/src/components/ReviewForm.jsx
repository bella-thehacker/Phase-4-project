import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StarRating from './StarRating';
import ReviewSuccessful from './ReviewSuccessful'; // Import the success pop-up

const ReviewForm = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Add state for showing the pop-up

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://phase-4-project-ybtk.onrender.com/hotels');
        if (response.ok) {
          const data = await response.json();
          setHotels(data);
        } else {
          console.error('Failed to fetch hotels');
          setFetchError('Could not load hotels, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setFetchError('Could not load hotels, please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const userId = localStorage.getItem('user_id');

  const formik = useFormik({
    initialValues: {
      hotel_id: '',
      rating: 0,
      comment: '',
      created_at: new Date().toISOString(),
    },
    validationSchema: Yup.object({
      hotel_id: Yup.string().required('Hotel selection is required'),
      rating: Yup.number()
        .min(1, 'Please select a rating')
        .max(5, 'Rating must be between 1 and 5')
        .required('Rating is required'),
      comment: Yup.string()
        .min(10, 'Comment should be at least 10 characters')
        .required('Comment is required'),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      console.log('Submitting review with User ID:', userId);
      setSubmitting(true);
      try {
        if (!userId) {
          console.error('User ID is not defined before submission');
          return;
        }

        const response = await fetch('https://phase-4-project-ybtk.onrender.com/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
          },
          body: JSON.stringify({
            user_id: userId,
            hotel_id: values.hotel_id,
            rating: values.rating,
            comment: values.comment,
            created_at: values.created_at,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          resetForm();
          setShowSuccessPopup(true); // Show success popup on successful submission
        } else {
          const errorData = await response.json();
          console.error('Submission error:', errorData);
          setFieldError('general', errorData.error || 'Failed to submit review');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (loading) {
    return <div>Loading hotels...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError}</div>;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Tell us what you think</h2>

        {formik.errors.general && (
          <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
            {formik.errors.general}
          </div>
        )}

        <div>
          <label htmlFor="hotel_id">Select Hotel:</label>
          <select
            id="hotel_id"
            name="hotel_id"
            value={formik.values.hotel_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select a hotel" />
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
          {formik.touched.hotel_id && formik.errors.hotel_id ? (
            <div style={{ color: 'red' }}>{formik.errors.hotel_id}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <StarRating
            rating={formik.values.rating}
            onRatingChange={(value) => formik.setFieldValue('rating', value)}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <div style={{ color: 'red' }}>{formik.errors.rating}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.comment && formik.errors.comment ? (
            <div style={{ color: 'red' }}>{formik.errors.comment}</div>
          ) : null}
        </div>

        <button type="submit" disabled={!formik.isValid || formik.isSubmitting || submitting}>
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>

        {submitting && <div aria-live="assertive">Submitting your review...</div>}
      </form>

      {/* Render the review success popup if the review was successful */}
      {showSuccessPopup && <ReviewSuccessful onClose={() => setShowSuccessPopup(false)} />}
    </div>
  );
};

export default ReviewForm;
