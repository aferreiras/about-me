import { AboutMe, Divider, LinksContainer, MainContainer } from "./styles/MainsStyles"

export default function Home() {

  const aboutMeText = "Worked as intern and then full stack developer at Intelie, where I contributed among a team of excelent professionals at developing features and apis for web applications, as much at front end with React JS/Typescrit as back end with Java/Kotlin, and at their maintenance.      Graduating in Control and Automation Engineering at UFRJ (Rio de Janeiro's Federal University), I had opportunities and challenges that made me grow personal and professionaly, making me resilient and capable of solving problems under pressure.       I have a passion for technology and innovation."
  
  return (
      <MainContainer>
      <AboutMe>
        <h1>About Me</h1>
        <div>{aboutMeText}</div>
      </AboutMe>
      <Divider/>
      <LinksContainer>
      <section>
        <span>Github:</span>
        <a href='https://github.com/aferreiras' target='_blank' rel='noopener noreferrer' >aferreiras</a>
      </section>        
      </LinksContainer>      
      </MainContainer>
  )
}
