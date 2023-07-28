import Nashville from "./templates/Nashville.js"
import profilePic from "./res/turing.png"


const summary = `
Hi. I'm Alan Turing. 
I am widely considered to be the father of 
theoretical computer science and artificial
intelligence. I'm looking for a position
where I can revolutionize the world of computer
sciene and lay the groundwork for artificail 
intelligence for the next millennia.
`

const skills = {
  "Algebra": 5,
  "Algorithms": 5,
  "Cryptography": 5,
  "Physics": 4,
  "Biology": 4,
  "Chemistry": 3,
  "English": 4,
  "German": 2
}

const interests = ["Running", "Rowing", "Gay Rights"];
  

const experience = [
  {
    "company": "On Computable Numbers, with an Application to the Entscheidungsproblem",
    "title": "Author",
    "years": "1936",
    "location": "London",
    "summary": `I presented the notion of a universal machine, which was later called the
        "Universal Turing Machine"", and then the "Turing machine". The universal machine is capable
        of computing anything that is computable: It is considered the precursor to the modern computer.`
  },
  {
    "company": "Bletchly Park",
    "title": "Cryptographist",
    "years": "1939-1945",
    "location": "Buckinghamshire, England",
    "summary": `With the assistance of others I created the Bombe to break the
    German Engima Code.  I also decrypted the more complex German naval 
    communications using cryptologic process using an early form of Bayesian 
    networks to infer information about the settings of the Enigma machine.`
  },
  {
    "company": "National Physics Labatory",
    "title": "Scientist",
    "years": "1945 -1948",
    "location": "London",
    "summary": `My design for the Automatic Computing Engine (ACE) was the 
     first complete specification of an electronic stored-program all-purpose 
     digital computer.`
  }
]



const education = [
  {
    "school": "King's College",
    "degreeType": "Fellow",
    "degree": "Mathmatics",
    "year": "1931-1934",
    "location": "Cambridge",
    "summary": `Dissertation proved the central limit theorem.`
    },
  {
     "school": "Princeton University",
     "degreeType": "PhD",
     "degree": "Mathmatics",
     "year": "1936-1938",
     "location": "Princeton, NJ",
     "summary": `Studied mathematics and cryptology at the Institute for Advanced Study`
    }
]

function Alan_Turing() {
  return (
    <Nashville 
      name="Alan Turing" 
      title="Father of Computers"
      phone="+44 1908 640408"
      email="computing@aol.com"
      web="https://en.wikipedia.org/wiki/Alan_Turing"
      summary={summary}
      profilePic={profilePic}
      skills={skills} 
      interests={interests} 
      experience={experience} 
      education={education} /> 
  );
}



export default Alan_Turing;
