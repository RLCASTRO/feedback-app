import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc'); //the fetch is working without the http://localhost:5000 because I set up a proxy on package.json
    const data = await response.json();
    setFeedback(data);
    setIsloading(false);
  };

  //Delete feedback
  const deleteFeedback  = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
        await fetch(`/feedback/${id}`, { method: 'DELETE'});
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update feedback item.
  const updateFeedback = async (id, updItem) => {
    
    const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
    })

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  //Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
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
