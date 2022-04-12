import styled from "styled-components";

export const AppHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #232222FF;
    font-size: 28px;

  }

  span {
    color: #9F0013;
    font-weight: bold;
  }
  
  span:nth-child(2) {
    font-size: 24px;
    color: #232222FF;
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
    color: #232222FF;
  }
  
  li {
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    color: #232222FF;
    margin: 0 8px;
  }

  li > a:hover {
    display: block;
    color: #9F0013;
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
  }
`