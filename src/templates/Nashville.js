/**
 * Memphis is a resume template based on the design "Memphis CV Resume"
 * https://elements.envato.com/memphis-cv-resume-7ALLT2N/
 * Memphis is a colorfol 2-column layout with the follwoing parameters:
 * @param {string} name - The name of the resume owner.
 * @param {string} summary - A summary or overview of the resume owner's skills and experience.
 * @param {string} profilePic - The image to use as the resume owner's profile picture loaded as a react image variable.
 * @param {string} title - The professional title or designation of the resume owner.
 * 
 * @param {Array} skills - An array of objects with the skill name as the key and level (0-5) as the value.
 * @param {Array} interests - An array of strings representing the interests or hobbies of the resume owner.
 * 
 * @param {Array} experience - An array of objects representing the work experience section of the resume.
 *   Each object should have properties "company", "title", "years", "location", "summary"
 * @param {Array} education - An array of objects representing the education section of the resume.
 *   Each object should have should have the keys: "school", "degree", "year", "location", "summary"
 * 
 * @param {string} phone - The contact phone number of the resume owner.
 * @param {string} web - The personal website or portfolio URL of the resume owner.
 * @param {string} email - The email address of the resume owner.
 *
 * @returns {JSX.Element} - The rendered resume template.
 */


import "./Nashville.css";
import { BsPhoneFill as PhoneIcon } from "react-icons/bs"
import { FaWikipediaW as WebIcon } from "react-icons/fa";
import { FiMail as MailIcon } from "react-icons/fi";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";
import { FaBriefcase as BriefcaseIcon } from "react-icons/fa";
import { BsMouse2Fill as MouseIcon } from "react-icons/bs";
import { FaRunning as RunningIcon } from "react-icons/fa";
import { MdRowing as RowingIcon } from "react-icons/md";
import { FaChessKing as ChessIcon } from "react-icons/fa";




const COLORS = ["#ACC8DE", "#FBCD53", "#F656B5"];

function Nashville({ name, profilePic, title, phone, web, email, summary, skills, experience, expertises, education }) {
    return (
        <div className="Nashville">

            {/* header with profile picture and title */}
            <header className="container-fluid m-0 p-0 d-flex row darkGrey justify-content-around">
                <div className="row">
                </div>               
               <div className="col-4 offset-1 circle">
                    <span><img src={profilePic} className="rounded-circle border-White" alt="Cinque Terre" width="185" height="185" /></span>      
                </div>
                <div className="col align-self-center">
                    <h1>{name}</h1>
                    <h2 className="text-secondary">{title}</h2>
                </div>
            </header>


            {/* Contact and Profile */}
            <div className="container-fluid m-0 p-0 d-flex row justify-content-around">
               <div className="row">
                    <div className="col-sm-4 tan justify-center">
                        <div className="blankRow"></div>
                        <h2 className="titleBlock text-center">Contact</h2>
                        <div className="SmallCircle text-center">
                            <span><PhoneIcon size={25} color="grey" /></span>
                        </div>
                        <div className="blankRow"></div>
                        <div className="text-center">{phone}</div>
                        <div className="SmallCircle text-center">
                            <span><MailIcon size={25} color="grey" /></span>
                        </div>
                        <div className="blankRow"></div>
                        <div className="text-center">{email}</div>
                    </div>
                    <div className="col-sm-1 d-flex flex-column align-items-center"> 
                        <div className="blankRow"></div>
                        <div className="verticalLine"> </div>
                        <div className="IconWrapper"><PersonIcon size={30} color="grey" /></div>
                        <div className="verticalLine"> </div>
                        <div className="blankRow"></div>
                    </div>
                    

                    <div className="col-sm-7">
                        <div className="blankRow"></div>
                        <div className="d-flex justify-content-start">
                            <h2 className="intro">Profile</h2>
                            
                         </div>   
                                                  
                        <p className="text-secondary">{summary}</p>
                    </div>
                </div>
            


        {/* Education and experience */}
            <div className="row">
                    <div className="col-4 tan">
                        <div className="blankRow"></div>
                        <h2 className="titleBlock text-center">Education</h2>
                        <Education education={education} />
                        <div className="blankRow"></div>
                        <h2 className="titleBlock text-center ">Expertise</h2>
                        <div className="d-flex text-center">
                            <Expertises expertises={expertises} />
                        </div>
                 </div>

                <div className="col-sm-1 d-flex flex-column align-items-center">
                   <div className="blankRow"></div>
                   <div className="verticalLine"> </div>
                   <div className="SmallCircle"><span><BriefcaseIcon size={30} color="grey" /></span></div>
                   <div className="verticalLine"> </div>
                   <div className="blankRow"></div>
                </div>


                <div className="col-7">
                   <div className="d-flex">
                            <h2 className="align-left intro">Experience</h2>
                            <hr className="centerLine" />
                   </div>
                             
                    
                        <Experience experience={experience} />
                    </div>
                
            </div>

            {/* Interests and Skills */}
            <div className="row">
                    <div className="col-4 -4 p-0 tan">
                        <h2 className="titleBlock text-center ">Interests</h2>
                        <div className="d-flex text-center">
                            <div className="spacerBlock"></div>
                            <div className="SmallCircle"><span><RunningIcon size={30} color="grey" /></span></div>
                            <div className="spacerBlock"></div>
                            <div className="SmallCircle"><span><ChessIcon size={30} color="grey" /></span></div>
                             <div className="spacerBlock"></div>
                            <div className="SmallCircle"><span><RowingIcon size={30} color="grey" /></span></div>
                        </div>
                 </div>

                <div className="col-sm-1 d-flex flex-column align-items-center">
                        <div className="blankRow"></div>
                        <div className="verticalLine"> </div>
                        <div className="SmallCircle"><span><MouseIcon size={30} color="grey" /></span></div>
                        <div className="verticalLine"> </div>
                        <div className="blankRow"></div>
                </div>


               <div className="col-7 p-0">
                        <div className="d-flex">
                            <h2 className="justify-left intro">Skills</h2>
                            <div>
                                <hr className="centerLine" />
                            </div>
                        </div>
                        <Skills skills={skills} />

               </div>
                   
               
           </div>

            
            </div>
            

            {/* Links & contact */}
            <footer className="rounded-bottom-3 flex-row d-flex align-items-center">
                <div className="col">
                    <PhoneIcon /> {phone}
                </div>
                <div className="col">
                    <WebIcon /> <a href={web}>web</a>
                </div>
                <div className="col">
                    <MailIcon /> <a href="mailto:{email}">{email}</a>
                </div>
            </footer>
            </div>   
         
    );
}


function Experience({ experience }) {
    const work = experience.map((work) => Work(work));
    return (
        <div className="experience">
            {work}
        </div>
    )
}


function Work({ company, title, years, location, summary }, i) {
    return (
        <div className="work" key={company}>
            <div className="d-flex">
                <h3 className="text-left font-italic">{company}</h3>
                <span className="text-secondary text-right">{years}</span>
              
            </div>
            <h4 className="text-secondary text-left"><u>{title}</u></h4>
            
            <div>
                <span className="text-secondary">{location}</span>
                            
            </div>

            <p className="text-secondary">{summary}</p>
        </div>
    )
}


function Education({ education }) {
    const schools = education.map((school) => School(school));
    return (
        <div className="education">
            {schools}
        </div>
    )
}


function School({ school, degreeType, degree, year, location, summary }, i) {
    return (
        <div className="school" key={school}>
            <div className="text-center">
                <div className="degreeStyle"><h3>{degreeType}</h3></div>
                <div>
                    <span className="text-secondary text-center">{degree}</span>
                </div>
                <div>
                    <span className="text-secondary text-center">{year}</span>
                </div>
                <div>
                    <span className="text-secondary text-center">{school}</span>
                  </div>
            <p className="educationSummary">{summary}</p>
            </div>
        </div>
    )
}

function Expertises({ expertises }) {

    const expertiseRows = expertises.map(expertise);

    return (
        <div className="expertises">
            {expertiseRows}
        </div>
    )
}

function expertise(expertise, i) {
    const fill = COLORS[i % COLORS.length];
    return (
        <div className="d-flex justif-content-start" key={i}>
            {Circle(1, fill)}
            <h3 className="">{expertise}</h3>
        </div>
    )
}


function Skills({ skills }) {

    // convert map to array of key-value pairs
    const skillsArray = Object.entries(skills);

    const skillRows = skillsArray.map(([name, level], index) => skill(name, level, COLORS[index % COLORS.length]));


    return (
        <div className="skills">
            {skillRows}
        </div>
    )

}


function skill(name, level, color) {

    let circles = Array(level).fill(1);
    let empty = 5 - level;
    if (empty > 0) {
        const emptyCircles = Array(empty).fill(0);
        circles = circles.concat(emptyCircles);
    }
    circles = circles.map((filled) => Circle(filled, color));
    return (
        <div className="skill" key={name}>
            <h3>{name}</h3>
            <div className="d-flex flex-row justify-content-start mb-3">
                {circles}
                <div className="">{level / 5 * 100}%</div>
            </div>
        </div>
    )
}


let circleIndex = 0;

function Circle(filled, color) {

    const fill = filled ? color : "white";
    return (
        <div style={{ "height": "14px", "width": "20px" }} key={++circleIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" height="140">
                <circle cx="9" cy="12" r="7" fill={fill} stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}





export default Nashville;