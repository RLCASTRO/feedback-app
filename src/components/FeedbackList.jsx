import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
function FeedbackList({ feedback, handleDelete }) {
  //Verifies if feedback has something on it
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div>
      <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

// This will set the default types of the props
//Here I'm setting the type for each array elemento that comes in
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
