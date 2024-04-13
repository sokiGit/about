import './App.css'
import Header from './components/Header/Header'
import Home from './routes/home/Home'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <Footer></Footer>
    </>
  )
}