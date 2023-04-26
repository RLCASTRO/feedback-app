import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from 'react';
import FeedbackData from "./data/FeedbackData";
function App() {
//state with default values comming from FeedbackData.js This is our App level state
const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header  /> 
            <div className="container">
                {/* passing the feedback data to the component */}
                <FeedbackList feedback={feedback} />

            </div>

        </>
    )
}
export default App;