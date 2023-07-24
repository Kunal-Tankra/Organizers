import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import MoreCompanies from './components/home/anotherCompaniesLogo/MoreCompanies';
import Navbar from './components/navbar/Navbar';
import Announcements from './components/announcements/Announcements';
import Owners from './components/club/Owners';
import TheManagers from './components/club/TheManagers';
import AcademyNews from './components/academy/AcademyNews';
import Under18 from './components/academy/Under18';
import upArrowImg from "./components/home/upArrow.png"

// squad banner img
// import squadBGImg from "./components/squad/Banner.webp"
import Under15 from './components/academy/Under15';
import Under13 from './components/academy/Under13';
import NewsDetails from './components/announcements/NewsDetails';
import { useEffect, useState } from 'react';
import StickyNavbar from './components/navbar/StickyNavbar';
import TournamentDetails from './components/tournamentDetails/TournamentDetails';
import "./components/Login.css"
import Results from './components/results/Results';
import ResultsContainer from './components/results/ResultsContainer';
import EventAllResults from './components/results/EventAllResults';
import ResultDetails from './components/results/ResultDetails';
import ResultDInfo from './components/results/ResultDInfo';
import ResultDVideos from './components/results/ResultDVideos';

function App() {
  // eslint-disable-next-line
  const [studentsData, setStudentsData] = useState([]);
  const [showAfterScroll, setShowAfterScroll] = useState(false);

  useEffect(() => {
    // students data
    // getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/student`)
    //   .then(data => setStudentsData(data))
  }, []);

  // scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setShowAfterScroll(true)
    }
    else {
      setShowAfterScroll(false)
    }
  })

  return (
    <>
      <BrowserRouter>
        {showAfterScroll ? <StickyNavbar showAfterScroll={showAfterScroll} /> : <Navbar />}





        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/topics/club-news/" element={<Announcements />} />
          <Route exact path="/topics/club-news/newsDetails/:newsId" element={<NewsDetails />} />

          <Route exact path="/owners/" element={<Owners />} />
          <Route exact path="/managers/" element={<TheManagers />} />
          {/* <Route exact path="/first-team/squad/" element={<Squad img={squadBGImg} />} /> */}
          <Route exact path="/topics/academy/" element={<AcademyNews />} />
          <Route exact path="/academy/under-18/" element={<Under18 students={studentsData.filter(std => std.category === "under18")} />} />
          <Route exact path="/academy/under-15/" element={<Under15 students={studentsData.filter(std => std.category === "under15")} />} />
          <Route exact path="/academy/under-13/" element={<Under13 students={studentsData.filter(std => std.category === "under13")} />} />


          {/* tournament's details */}
          <Route exact path="/tournament/:id" element={<TournamentDetails />} />

          {/* results */}
          <Route exact path="/results" element={<Results />} >
            {/* <Route index element={<h1>cricket</h1>} /> */}
            <Route exact path="cricket" element={<ResultsContainer />} />
            <Route exact path="football" element={<ResultsContainer />} />
            <Route exact path="volleyball" element={<ResultsContainer />} />

          </Route>

          {/* all results */}
          <Route exact path="/results/:id" element={<EventAllResults />} />

          {/* result details */}
          <Route exact path="/result/:id" element={<ResultDetails />} >
            <Route index element={<ResultDInfo />} />
            <Route exact path="info" element={<ResultDInfo />} />
            <Route exact path="videos" element={<ResultDVideos />} />

          </Route>

        </Routes>

        {showAfterScroll && <img className='goToTopArrow' onClick={() => window.scrollTo(0, 0)} src={upArrowImg} alt="up arrow" />}

        <MoreCompanies />
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
