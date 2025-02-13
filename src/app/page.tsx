"use client"
import { useState } from "react"
import { AboutMeComponent } from "./components/about-me"
import Iframe from "./components/iframe"
import { SideButton } from "./components/side-button"
import { Sidebar } from "./components/sidebar"
import { ContentContainer, Divider, LinksContainer, MainContainer, SidebarContainer } from "./styles/MainsStyles"

export default function Home() {
  const [isSidebarOpen, setSidebarState] = useState(true)

  return (
    <MainContainer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <SidebarContainer>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
      </SidebarContainer>
      <SideButton isSidebarOpen={isSidebarOpen} setSidebarState={state => setSidebarState(state)}/>

      {/* <Iframe src="https://aferreiras.github.io/about-me/" width="800px" height="600px" /> */}

      <ContentContainer>
        <AboutMeComponent />
        <Divider />
        <LinksContainer>
          <section>
            <span><a href='https://github.com/aferreiras' target='_blank' rel='noopener noreferrer' >Github</a></span>
          </section>
          <section>
            <span><a href='https://www.linkedin.com/in/andreferreira2020/' target='_blank' rel='noopener noreferrer' >LinkedIn</a></span>
          </section>
        </LinksContainer>
      </ContentContainer>
    </MainContainer>
  )
}
