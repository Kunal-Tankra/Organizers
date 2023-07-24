import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getApiData from '../../GetApiFunc';
import SingleMatch from './SingleMatch';

const EventAllResults = () => {
    const [matchList, setMatchList] = useState([]);

    // params
    const { id } = useParams()

    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/event-result/${id}/`)
            .then(data => setMatchList(data.results))
    }, [id]);

    return (
        <>
            <div className='topBox'></div>
            <div className='resultsContainer'>
                <div className="resultsType_navbar">
                    <span >Matches</span>

                </div>

                <div className="allMatches">
                    {matchList.map(match => <SingleMatch key={match.id} id={match.id} fixture={match.fixture} result_short_description={match.result_short_description} team_name1={match.team_name1} team_name2={match.team_name2} team_score1={match.team_score1} team_score2={match.team_score2} />)}
                </div>
            </div>
        </>
    )
}

export default EventAllResults
