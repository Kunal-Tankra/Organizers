import React, { useEffect, useState } from 'react'

import SquadChild from './SquadChild'
import getApiData from '../../GetApiFunc';

const Squad = (props) => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/team`)
        .then(data=>setTeamData(data))
    }, []);



    return (
        <>
            <div className="login_BgImg">
                <img src={props.img} alt="img" />
            </div>

          
            <div className='loginContainer'>
                <h1>The First Team</h1>

               {/* goal Keepers */}
               {<SquadChild typeData={teamData.filter(player=>player.player_choice === "Goalkeepers")} heading={"Goalkeepers"} />}
               {/*  Defenders */}
               <SquadChild typeData={teamData.filter(player=>player.player_choice === "Defenders")} heading={"Defenders"} />
               {/*  Midfielders */}
               <SquadChild typeData={teamData.filter(player=>player.player_choice === "Midfielders")} heading={"Midfielders"} />
               {/*  Forwards */}
               <SquadChild typeData={teamData.filter(player=>player.player_choice === "Forwards")} heading={"Forwards"} />
               {/*  CoachingStaff */}
               <SquadChild typeData={teamData.filter(player=>player.player_choice === "CoachingStaff")} heading={"Coaching Staff"} />

            </div>
        </>
    )
}

export default Squad
