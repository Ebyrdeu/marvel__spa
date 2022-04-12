import styled from 'styled-components';

export const CharInfoStyled = styled.div`
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 5;
  background-color: #fff;
 

  div:nth-child(1) {
    display: flex;
    justify-content: start;
  }
  img {
    margin-right: 10px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  div > div > p {
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
  }
  div > div > div  {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  p {
    font-size: 14px;
    line-height: 18px;
  }

  button {
    color: white;
    background-color: #9F0013FF;
    transition: 0.3s ease-in-out;
    width: 100px;
  }

  button:nth-child(1) {
    margin-bottom: 10px;
  }

  button:hover {
    background-color: #9F0013FF;
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
  }
  
 span {
   font-size: 18px;
   text-align: left !important;
   font-weight: bold;
 }
  
  ul {
    padding: 0;
    list-style: none;
    li {
      padding:  2px;
      border-radius: 5px;
      width: 100%;
      line-height: 25px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-top: 10px;
    }
  }
`