import GraceTemplate from "./templates/Grace_Template"
import profilePic from "./res/GraceHopper.jpg"


const summary = `
Hi. I'm Grace Hopper. 
I am an American computer scientist, mathematician, and US Navy rear admiral.
I was one of the first programmers of the Harvard Mark I computer and became a pioneer of computer programming.
`

const skills = {
  "Computer Programming": 5,
  "Algorithms": 4,
  "Trigonometry": 3,
  "Physics": 3,
}

const interests = ["Needlepoint", "Reading", "Piano"];
  

const experience = [
  {
    "company": "World War II - US Navy",
    "title": "Rear Admiral",
    "years": "1943",
    "location": "Boston, MA",
    "summary": `Assigned to the Bureau of Ships Computation Project at Harvard University. Co-Authored three papers on the Automatic Sequence Controlled Calculator.  `
  },
  {
    "company": "Eckert-Mauchly Computer Corporation",
    "title": "Senior Mathematician",
    "years": "1949",
    "location": "Philadelphia",
    "summary": `Pioneered the idea of automatic programming and explored new ways to use the computer to code.
    Developed the first compiler called A-0, which translated mathematical code into machine-reeadable code.`
  },
  {
    "company": "Vassar College",
    "title": "Associate Mathematics Professor",
    "years": "1931",
    "location": "Poughkeepsie, NY",
    "summary": `Taught Mathematics and Physics while pursing my doctorate.`
  }
]



const education = [
  {
    "school": "Yale University",
    "degree": "PhD",
    "year": "1934",
    "location": "New Haven, CT",
    "summary": "Received my Masters in 1930 and then my PhD in 1934. I later on became 1 of 3 the first modern programmers."
    
  }
]

function Grace_Hopper() {
  return (
    <GraceTemplate
      name="Grace-Hopper" 
      title="Rear Admiral"
      phone="212-555-1212"
      email="grace_hopper@hotmail.com"
      web="https://en.wikipedia.org/wiki/Grace_Hopper"
      summary={summary}
      profilePic={profilePic}
      skills={skills} 
      interests={interests} 
      experience={experience} 
      education={education} /> 
  );
}



export default Grace_Hopper;
