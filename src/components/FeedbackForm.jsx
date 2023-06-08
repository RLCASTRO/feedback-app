import { useState } from 'react';
import Card from './shared/Card';
import Button from './Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    //when the function first loads, verify if the text has something on it
    //if it doesn't then set the button to disabled and the message to null
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setText('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //because we can still forcing the button the be available on front end, we'll do another verification
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText('');
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our services?</h2>
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
