import { FaTimes } from 'react-icons/fa'; //font awesome library
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    //passing the reverse prop here
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      {/* If you want to pass an argument on the click event, put it in a function */}
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
}

export default FeedbackItem;
