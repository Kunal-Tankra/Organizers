import React from 'react'

const SingleManager = (props) => {
    
    return (
        <>
            < img src={props.ownerImage} alt="manager" />

            <div className="managerInfo">
                {/* this image is for text container */}
                <img src={props.ownerImage} alt="manager" />  
                <div className="managerInfo_container">
                    <h1>{props.ownerName}</h1>
                    <p>After stints alongside Frank Rijkaard at FC Barcelona, Galatasaray and the Saudi Arabian national team, Albert Roca was appointed as the Blues’ Head Coach in July 2016. The Spaniard made an instant impact, with a historic run in the remainder of the Blues’ 2016 AFC Cup campaign. Under him, Bengaluru FC became the first Indian team to reach the final of an AFC competition, going down 1-0 to Air Force Club in the final in Doha. His first full season at the club saw the Blues pick up their second Federation Cup.</p>

                    <p>Roca oversaw the club’s transition from the I-League to the Indian Super League, where he led a rampant Blues side to the top of the table with a record points tally. The Blues’ debut campaign saw a run to the summit, where they broke several League records before going down to Chennaiyin FC in the final. Roca’s Blues then took part in the inaugural edition of the Super Cup where they defeated East Bengal in the final to make it five trophies in as many seasons. Roca bid farewell to the club after guiding them to the Inter-zone finals of the 2018 AFC Cup, after a final day victory over Abahani Dhaka granted the Blues passage to the knockouts.</p>

                </div>
            </div>
        </>
    )
}

export default SingleManager
