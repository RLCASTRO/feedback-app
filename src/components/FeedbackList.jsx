import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  
  //Verifies if feedback has something on it
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? <Spinner /> : 
   (
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
