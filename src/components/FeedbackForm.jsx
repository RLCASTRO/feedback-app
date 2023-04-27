import Card from './shared/Card';
import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How whould you rate our services?</h2>
        {/* @todo - Rating select component */}

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
