import { motion, AnimatePresence } from 'framer-motion';
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
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
              key={item.id}
              initial={{oppacity: 0}}
              animage={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Version without the animation
// return (
//   <div>
//     <div className='feedback-list'>
//       {feedback.map((item) => (
//         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//     </div>
//   </div>
// );

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
