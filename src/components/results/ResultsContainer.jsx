import React, { useEffect, useState } from 'react'
import "./ResultsContainer.css"
import MatchListContainer from './MatchListContainer';
import getApiData from '../../GetApiFunc';

const ResultsContainer = () => {
    const [underlineLeft, setUnderlineLeft] = useState("0%");
    const [colorBlackElem, setColorBlackElem] = useState("Results");
    const [matchList, setMatchList] = useState([]);

    // handleUnderline function
    const handleUnderline = (e)=>{
        setUnderlineLeft(e.target.offsetLeft)

        setColorBlackElem(e.target.innerText)
    }

    useEffect(() => {
      // api call for results
      getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/event-result/`)
      .then(data=>setMatchList(data))
    }, []);


  return (
    <>
      <div className="resultsType_navbar">
        <span onClick={(e)=>handleUnderline(e)} style={{color: colorBlackElem==="Results"? "black": "rgb(161, 161, 161)"}} >Results</span>
        <span onClick={(e)=>handleUnderline(e)} style={{color: colorBlackElem==="Upcoming"? "black": "rgb(161, 161, 161)"}}>Upcoming</span>

        {/* underline  */}
        <span style={{left: underlineLeft}} className="resultstype_underline"></span>
      </div>

      <div className="matchLists">
            {matchList.map(matches=><MatchListContainer key={matches.id} event_title={matches.event_title} matcheResults={matches.results} />)}
      </div>
    </>
  )
}

export default ResultsContainer
