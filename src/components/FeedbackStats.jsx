import { useContext } from "react";
import FeedbackContext from './context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //Calculate the ratins avg
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

    //this line is using regex to remove the zero in case of avg like 9.0 but I like this way so I won't use it.
    // avg = avg.toFixed(1).replace(/[.,]0$/, '');
    avg = avg.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4> Average Rating: {(isNaN(avg)? 0 : avg)} </h4>
    </div>
  );
};

export default FeedbackStats;
