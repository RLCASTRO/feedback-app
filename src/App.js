import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import HouseUserIconLink from './components/HouseUserIconLink';
import { FeedbackProvider } from './components/context/FeedbackContext';
import { useState } from 'react';
function App() {
  //state with default values comming from FeedbackData.js This is our App level state

  const [isAbout, setIsAbout] = useState(true);

  const clickAboutIcon = (status) => {
    setIsAbout(status);
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                {/* passing the feedback data to the component. */}
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

            <Route
              path='/about'
              element={<AboutPage handleAboutClick={clickAboutIcon} />}
            />
          </Routes>
          {isAbout ? (
            <AboutIconLink handleAboutClick={clickAboutIcon} />
          ) : (
            <HouseUserIconLink handleAboutClick={clickAboutIcon} />
          )}
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
