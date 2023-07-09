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


import "./Memphis.css";
import { FiPhoneCall as PhoneIcon } from "react-icons/fi";
import { FaWikipediaW as WebIcon } from "react-icons/fa";
import { FiMail as MailIcon } from "react-icons/fi";

const COLORS = ["#ACC8DE", "#FBCD53", "#F656B5"];

function Memphis({name, profilePic, title,phone, web, email, summary, skills, experience, interests, education}) {
    return (
        <div className="Memphis container border rounded-4 border-black border-5 p-0 mb-4 mt-4">

            {/* header */}
            <header className="rounded-top-3 m-0 p-0 d-flex row justify-content-around">
                <div className="col"><Diagonals /></div>
                <div className="col align-self-center">CV Resume</div>
                <div className="col align-self-baseline"><DiagonalsBottom /></div>
            </header>

            {/* Profile pick and summary */}
            <div className="row">
                <div className="col-3 pe-0 border-end border-black border-4 yellow d-flex justify-content-center  align-items-center">
                    <div className="profile">
                        <img src={profilePic} alt={name} className="img-fluid" />
                    </div>
                </div>
                <div className="col-9 intro">
                    <h1>{name}</h1>
                    <h2 className="text-secondary">{title}</h2>
                    <p className="text-secondary">{summary}</p>
                </div>
            </div>

            {/* Skills and experience */}
            <div className="row border-top border-black border-4">
                <div className="col-3 border-end border-black border-4 p-0">
                    <h2 className="text-center bubblegum border-bottom">My Skills</h2>
                    <Skills skills={skills} />
                </div>
                <div className="col-9 p-0">
                    <h2 className="text-center bubblegum border-bottom">My Experience</h2>
                    <Experience experience={experience} />
                </div>
            </div>

            {/* Interests and Education */}
            <div className="row border-top border-black border-4">
                <div className="col-3 border-end border-black border-4 p-0">
                    <h2 className="text-center yellow border-bottom">My Interests</h2>
                    <Interests interests={interests} />
                </div>
                <div className="col-9 p-0">
                    <h2 className="text-center yellow border-bottom">My Education</h2>
                    <Education education={education} />
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
            <h3>{company}</h3>
            <h4 className="text-secondary">{title}</h4>
            <div>
                <span className="text-secondary">{location}</span>
                <span className="text-bubblegum"> | </span>
                <span className="text-secondary">{years}</span>
            </div>

            <p className="">{summary}</p>
        </div>
    )
}


function Education({education}) {
    const schools = education.map((school) => School(school));
    return (
        <div className="education">
            {schools}
        </div>
    )
}


function School({school, degree, year, location, summary}, i) {
    return (
        <div className="school" key={school}>
            <div className="d-flex justify-content-between">
                <h3>{school}</h3>
                <div>
                    <span className="text-secondary">{location}</span>
                    <span className="text-bubblegum"> | </span>
                    <span className="text-secondary">{year}</span>
                </div>
            </div>           
            <p className="">{summary}</p>
        </div>
    )
}

function Interests({interests}) {
    
    const interestRows = interests.map(interest);

    return (
        <div className="interests">
            {interestRows}
        </div>
    )
}

function interest(interest, i) {
    const fill = COLORS[i % COLORS.length];
    return (
        <div className="d-flex justif-content-start" key={i}>
            {Circle(1, fill)}
            <h3 className="">{interest}</h3>
        </div>
    )
}


function Skills({skills}) {

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
                <div className="">{level/5 * 100}%</div>
            </div>
        </div>
    )
}

let circleIndex = 0;

function Circle(filled, color) {
    
    const fill = filled ? color : "white";
    return (
        <div style={{ "height": "14px", "width":"20px" }} key={++circleIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" height="140">
                <circle cx="9" cy="12" r="7" fill={fill} stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}

function Diagonals() {
    return (
        <div style={{"height":"14px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="140">
                <line x1="0" y1="20" x2="15" y2="0" stroke="black" strokeWidth="2" />
                <line x1="20" y1="20" x2="35" y2="0" stroke="black" strokeWidth="2" />
                <line x1="40" y1="20" x2="55" y2="0" stroke="black" strokeWidth="2" />
            </svg>
        </div>

    );
}

function DiagonalsBottom() {
    return (
        <div style={{ height: "14px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="" height="140">
                <line x1="0"  y1="137" x2="15" y2="113" stroke="black" strokeWidth="2" />
                <line x1="20" y1="136" x2="35" y2="114" stroke="black" strokeWidth="2" />
                <line x1="40" y1="136" x2="55" y2="114" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}

export default Memphis;
