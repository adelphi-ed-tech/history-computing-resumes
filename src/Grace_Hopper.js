import Memphis from "./templates/Memphis"
import profilePic from "./res/GraceHopper.jpg"


const summary = `
Hi. I'm Grace Hopper. 
I am an American computer scientist, mathematician, and US Navy rear admiral.
I was one of the first programmers.
`

const skills = {
  "Computer Programming": 5,
  "Algorithms": 5,
  "Trigonometry": 5,
  "Astronomy": 4,
  "Cartography": 4,
  "Arabic": 5,
  "Persian": 5,
  "Greek": 2
}

const interests = ["Chess", "Falconry", "Cooking"];
  

const experience = [
  {
    "company": "World War II - US Navy",
    "title": "Rear Admiral",
    "years": "1943",
    "location": "",
    "summary": `.`
  },
  {
    "company": "",
    "title": "",
    "years": "",
    "location": "",
    "summary": `.`
  }
]



const education = [
  {
    "school": "Yale University",
    "degree": "PhD",
    "year": "1934",
    "location": "New Haven, CT",
    "summary": "At Yale, I received my Masters in 1930 and then my PhD in 1934. I later on became 1 of 3 the first modern programmers."
    
  }
]

function Grace_Hopper() {
  return (
    <Memphis 
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
