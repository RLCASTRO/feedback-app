import Card from '../shared/Card';
import { Link } from 'react-router-dom';
import { FaHouseUser } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
const AboutPage = ({handleAboutClick}) => {
  // const params = useParams();
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>
        {/* <p>{params.id}</p> */}

        <div className='home-link' >
          <Link to='/'>
           <FaHouseUser size={30} onClick={() => { handleAboutClick(true)}}/>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AboutPage;
