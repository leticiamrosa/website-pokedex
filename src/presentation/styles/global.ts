import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
