import '../styles/header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <a href='/'>
          <img src="light-logo-interstellar-insights.png" alt="Interstellar Insights Logo" className='logo' />
        </a>
      </div>
      <div className='barGap'></div>
      <div className='title-container'>
        <h1>Daily Astronomical Wonders from NASA APOD <br /><span className='apod'>Astronomy Picture of the Day</span></h1>
      </div>
    </header>
  )
}

export default Header;
