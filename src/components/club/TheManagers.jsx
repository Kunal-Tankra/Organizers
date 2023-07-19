import React, { useEffect, useState } from 'react'
import "./TheManagers.css"

// imgs
import Cover from "./images/the managers/Cover-1.jpg"

import getApiData from '../../GetApiFunc'
import SingleManager from './SingleManager'

const TheManagers = () => {
    const [managersData, setManagersData] = useState([]);

    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/owner`)
            .then(datas => setManagersData(datas.filter(data => data.user_type === "manager")))
    }, []);

    return (
        <div className='managersContainer'>
            <img src={Cover} alt="background" />


            {/* map */}
            {managersData.map(manager => <SingleManager key={manager.id} ownerImage={manager.ownerImage} ownerName={manager.ownerName} />)}


        </div>
    )
}

export default TheManagers
