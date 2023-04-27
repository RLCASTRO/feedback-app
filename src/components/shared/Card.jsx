import PropTypes from 'prop-types'
function Card({ children, reverse }) {
  return (
    // use {} with backticks instead of double quotation to use javascript to create a conditional class verification
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>

  );
}

Card.defaultProps = { 
    reverse: false,
} 

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card;
