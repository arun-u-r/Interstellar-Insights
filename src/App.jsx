import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import SideBar from './components/SideBar'
import Loading from './components/Loading'

function App() {

  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }


  useEffect(() => {
    const fetchAPIData = async () => {

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = (new Date()).toISOString().split('T')[0];
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const data = JSON.parse(localStorage.getItem(localKey))
        console.log('Fetched From Cache today');
        setData(data);
        return;
      }
      localStorage.clear()

      try {
        const response = await fetch(url)
        const data = await response.json()
        localStorage.setItem(localKey, JSON.stringify(data))
        setData(data)
        console.log('Fetched From API today');

      } catch (err) {
        console.log(err)

      }
    }
    fetchAPIData()
  }, [])

  return (
    <div >
      <Header />
      {data ? <Main data={data} /> : <Loading />}

      {showModal &&
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      }

      {data &&
        <Footer data={data} handleToggleModal={handleToggleModal} />
      }


    </div>

  )
}

export default App
