import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  
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
              initial={{ oppacity: 0 }}
              animage={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FeedbackList;
