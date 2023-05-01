
import { FaHouseUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
const AboutIconLink = ({handleAboutClick}) => {
  return (
    <div className='about-link'>
      <Link to='/'>
        <FaHouseUser size={30} onClick={() => { handleAboutClick(true)}} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
