import React, { useEffect, useState } from 'react'
import "./ResultsContainer.css"
import MatchListContainer from './MatchListContainer';
import getApiData from '../../GetApiFunc';

const ResultsContainer = () => {
    const [matchList, setMatchList] = useState([]);

    

    useEffect(() => {
      // api call for results
      getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/event-result/`)
      .then(data=>setMatchList(data.filter(event=>event.results.length !== 0)))
    }, []);


  return (
    <>
      <div className="resultsType_navbar">
        <span >Results</span>

        {/* underline  */}
      </div>

      <div className="matchLists">
            {matchList.map(matches=><MatchListContainer key={matches.id} event_title={matches.event_title} matcheResults={matches.results} />)}
      </div>
    </>
  )
}

export default ResultsContainer
