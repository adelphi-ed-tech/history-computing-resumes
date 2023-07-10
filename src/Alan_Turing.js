import Memphis from "./templates/Memphis"
import profilePic from "./res/khwarizmi.png"


const summary = `
Hi. I'm Alan Turing. 
I am widely considered to be the father of theoretical 
computer science and artificial intelligence. 
I'm looking for a position where I can revolutionize
the world of computer sciene and lay the groundwork
for artificail intelligence for the next millennia.
`

const skills = {
  "Algebra": 5,
  "Algorithms": 5,
  "Trigonometry": 5,
  "Astronomy": 4,
  "Cartography": 4,
  "English": 5,
  "Persian": 5,
  "Greek": 2
}

const interests = ["Chess", "Falconry", "Cooking"];
  

const experience = [
  {
    "company": "The Compendious Book on Calculation by Completion and Balancing",
    "title": "Author",
    "years": "c. 813",
    "location": "Baghdad",
    "summary": `I wrote the first book on algebra and algorithms, 
    which was translated into Latin in the 12th century and remained a standard 
    mathematical text in Europe until the 16th century. Among other import proofs,
    I demonstrate how to to solve quadratic equations by completing the square.`
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
    "school": "House of Wisdom",
    "degree": "Scholar",
    "year": "c. 820",
    "location": "Baghdad",
    "summary": `Distinguished scholar of the Baghdad House of Wisdom, a center for the study of mathematics, astronomy, linguistics, and philosophy.`
  }
]

function Alan_Turing() {
  return (
    <Memphis 
      name="Alan Turing" 
      title="Father of Algebra"
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



export default Alan_Turing;
