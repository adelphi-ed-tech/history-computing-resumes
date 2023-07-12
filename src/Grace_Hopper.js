import Memphis from "./templates/Memphis"
import profilePic from "./res/khwarizmi.png"


const summary = `
Hi. I'm Grace Hopper. 
I am an American computer scientist, mathematician, and US Navy rear admiral.
I was one of the first 
`

const skills = {
  "Algebra": 5,
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
    "company": "US Nacy",
    "title": "Rear Admiral",
    "years": "c. 813",
    "location": "",
    "summary": `.`
  },
  {
    "company": "On the Calculation with Hindu Numerals",
    "title": "Author",
    "years": "c. 820",
    "location": "Baghdad",
    "summary": `In this work I describe the Hindu-Arabic numeral system, which
    became the number system used by most of the world today. I also describe
    the use of zero as a placeholder, which was a revolutionary concept at the time.`
  },
  {
    "company": "Book of the Description of the Earth",
    "title": "Author",
    "years": "c. 833",
    "location": "Baghdad",
    "summary": `Here I detail the coordinates of cities and other geographical features
    of the time, and describe how to project the spherical surface of the earth onto a plane.`
  }
]



const education = [
  {
    "school": "Yale University",
    "degree": "PhD",
    "year": "1934",
    "location": "New Haven, CT",
    "summary": "At Yale, I received my Masters in 1930 and then my PhD in 1934. I later on became 1 of 3 the first modern programmers."
    ``
  }
]

function Grace_Hopper() {
  return (
    <Memphis 
      name="Grace-Hopper" 
      title="Rear Admiral"
      phone="212-555-1212"
      email="algorithms720@hotmail.com"
      web="https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi"
      summary={summary}
      profilePic={profilePic}
      skills={skills} 
      interests={interests} 
      experience={experience} 
      education={education} /> 
  );
}



export default Grace_Hopper;
