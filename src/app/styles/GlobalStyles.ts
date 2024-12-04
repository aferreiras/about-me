"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
    display: flex;
  }

`