"use client"

import styled from "styled-components"

export const MainContainer = styled.article`
  background: linear-gradient(180deg, #ffffff, #b3b3b3, #666666);
  color: black;
  display: flex;
  flex-direction: row;
`
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 15vw 50px 15vw;
`

export const Divider = styled.hr`
  margin: 50px 0px 50px 0px;
`

export const LinksContainer = styled.div`
  section {
    span {
      margin-right: 10px;
    }
    a {
      font-weight: 600;
      color: black;
    }
  }
`
