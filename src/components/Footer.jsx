import '../styles/footer.css'
import PropTypes from 'prop-types'
import Robo from './Robo';


const Footer = (props) => {

  const { handleToggleModal, data } = props
  return (
    <footer>
      <div className='bgGradient'>
        <h1>APOD : Astronomy Picture of the Day</h1>
        <h2>
          {data.title}
        </h2>
        <h1>{data?.copyright}</h1>
        <p>{data?.date}</p>
      </div>
      <p className='copyright'>&copy; {new Date().getFullYear()}<a href='https://github.com/arun-u-r' target="_blank" rel="noopener noreferrer"> Arun U R.</a> All rights reserved.</p>
      {/* <p>&nbsp;{data?.date}</p> */}
      <Robo handleToggleModal={handleToggleModal} />

    </footer>
  );
};


Footer.propTypes = {
  handleToggleModal: PropTypes.func,
  data: PropTypes.shape({
    copyright: PropTypes.string,
    date: PropTypes.string,
    explanation: PropTypes.string,
    hdurl: PropTypes.string,
    media_type: PropTypes.string,
    service_version: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  })
};

export default Footer