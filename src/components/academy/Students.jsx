import React from 'react'
import StudentsChild from './StudentsChild'

const Students = (props) => {
    return (
        <>
            <div className="login_BgImg">
                <img src={props.img} alt="img" />
            </div>

            <div className='loginContainer'>
                <h1>{props.heading}</h1>

                {/* goal Keepers */}
                {<StudentsChild typeData={props.students.filter(player => player.position === "Goalkeepers")} heading={"Goalkeepers"} />}
                {/*  Defenders */}
                <StudentsChild typeData={props.students.filter(player => player.position === "Defenders")} heading={"Defenders"} />
                {/*  Midfielders */}
                <StudentsChild typeData={props.students.filter(player => player.position === "Midfielders")} heading={"Midfielders"} />
                {/*  Forwards */}
                <StudentsChild typeData={props.students.filter(player => player.position === "Forwards")} heading={"Forwards"} />
                {/*  CoachingStaff */}
                <StudentsChild typeData={props.students.filter(player => player.position === "CoachingStaff")} heading={"Coaching Staff"} />

            </div>
        </>
    )
}

export default Students
