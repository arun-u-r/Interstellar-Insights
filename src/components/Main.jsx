import PropTypes from 'prop-types'
import { useState } from 'react'
import Loading from './Loading'
const Main = (props) => {

  const { data } = props
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }


  return (
    <>
      <div className="imageContainer">
        {loading && <Loading />}
        <img src={data?.hdurl}
          alt={data?.title}
          className={`bgImage ${loading ? 'hidden' : ''}`}
          onLoad={handleImageLoad} />
      </div>
    </>
  )
}


Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string,
    title: PropTypes.string.isRequired,
  })
}

export default Main