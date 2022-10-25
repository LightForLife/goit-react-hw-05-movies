import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'Api';
import { useState, useEffect, useCallback } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFilmsReviews = useCallback(async () => {
    try {
      setIsLoading(true);
      const reviews = await fetchMoviesReviews(movieId);
      setReviews(reviews);
    } catch {
      setError('Failed to load film :(');
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    getFilmsReviews();
  }, [getFilmsReviews]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 && <p>No reviews for this movie</p>}
      {!isLoading ? (
        !error ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author - {review.author}:</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>{error}</div>
        )
      ) : (
        <div>Is loading</div>
      )}
    </div>
  );
};
export default Reviews;
