import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  const [feedback, setFeedback] = useState([ ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, [])

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id')
    const data = await response.json();
    setFeedback(data);
    setIsloading(false); 
  }
  

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update feedback item.
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    // console.log(feedback);
  };

  //This will set the item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const cancelFeedback = () => {
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, //this is the function triggered when click on the edit icon
        feedbackEdit, //the state to be accessible outside this component
        isLoading,
        updateFeedback,
        cancelFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
