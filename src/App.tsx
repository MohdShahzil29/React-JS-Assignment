import './App.css'
import Banner from './components/Banner/Banner'
import FAQSection from './components/FAQSection/FAQSection'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SuccessStorySection from './components/SuccessStorySection/SuccessStorySection'
import {Route, Routes} from 'react-router-dom'
import RouterHandler from './components/Routing/RouterHandler/RouterHandler'
import CongratulationScreen from './components/Routing/CongratulationScreen/CongratulationScreen'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <SuccessStorySection />
          <Banner />
          <FAQSection />
          <Footer />
        </>
      } />
      <Route path="/getProject" element={<RouterHandler />} />
      <Route path="/congratulation" element={<CongratulationScreen />} />
    </Routes>
  </div>
  )
}

export default App
