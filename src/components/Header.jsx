import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {

    const HeaderStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={ HeaderStyles }>
            <div className="container">
                <h2>{text}</h2>

            </div>

        </header>
    )
}

//You can set default values for your props here
//so where there's no value passing to it, it grabs the default value.
Header.defaultProps = {
    text: 'Feedback UI from default values',
    //setting default color if none is passed as a prop
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95'
}

//You can define default types for the props here
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
