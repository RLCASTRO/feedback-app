import { FaQuestion } from 'react-icons/fa';
import { Link } from "react-router-dom";
const AboutIconLink = ({handleAboutClick}) => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} onClick={() => { handleAboutClick(false)}} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
