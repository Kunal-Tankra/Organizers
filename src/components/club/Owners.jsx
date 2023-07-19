import React, { useEffect, useState } from 'react'
import ownersBGImg from "./images/Owners.jpg"
import OwnerInfo from './OwnerInfo'
import getApiData from '../../GetApiFunc'

const Owners = () => {
    const [owenrsData, setOwenrsData] = useState([]);

    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/owner`)
        .then(datas=>setOwenrsData(datas.filter(data=>data.user_type === "owner")))
    }, []);

    return (
        <>
            <div className="login_BgImg">
                <img src={ownersBGImg} alt="img" />
            </div>


            <div className='loginContainer theClubContainer'>
                <h1>Owners</h1>

                <h3>JSW Group</h3>
                <p>A $13 billion conglomerate, the Jindal South West (JSW) Group is a part of the O.P. Jindal Group. JSW has set up business facilities in various core sectors of India with verticals that explore innovative and sustainable avenues in steel, energy, infrastructure and cement.</p>
                <p>The JSW Group is committed in its endeavour to pave way for India’s development towards becoming a global superpower in all these sectors and Bengaluru Football Club is one of its biggest pillars in the JSW Sports fold.</p>

                <div className="squadPlayers_container">
                    {owenrsData.map(owner=><OwnerInfo name={owner.ownerName} img={owner.ownerImage} />)}
                </div>
            </div>
        </>
    )
}

export default Owners
