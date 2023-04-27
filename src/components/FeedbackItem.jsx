import { FaTimes } from 'react-icons/fa'; //font awesome library
import PropTypes from 'prop-types';
import Card from './shared/Card';
function FeedbackItem({ item, handleDelete }) {
  return (
    //passing the reverse prop here
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      {/* If you want to pass an argument on the click event, put it in a function */}
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
