import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  //Verifies if feedback has something on it
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div>
      <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;
