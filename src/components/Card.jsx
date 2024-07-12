import '../styles/card.css';
import PropTypes from 'prop-types';



const Card = (props) => {

  const { data } = props

  return (
    <div className='cardComponent'>
      <div className="outer">
        <div className="dot"></div>
        <div className="card">
          <div className="ray"></div>
          <h1 className="text">{data?.title}</h1>
          <div className="explanation">{data?.explanation}</div>
        </div>
      </div>

    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    explanation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}

export default Card