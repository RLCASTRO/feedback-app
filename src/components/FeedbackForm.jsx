import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from './context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback, cancelFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    //when the function first loads, verify if the text has something on it
    //if it doesn't then set the button to disabled and the message to null
    let inputText = e.target.value;
    if (inputText === null || inputText === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (inputText.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
      console.log('hello');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(inputText);

    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //because we can still forcing the button the be available on front end, we'll do another verification
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
      setBtnDisabled(true);
      cancelFeedback();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How whould you rate our services?</h2>
        {/* @todo - Rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            {' '}
            Send{' '}
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
